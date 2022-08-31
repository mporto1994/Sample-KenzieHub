import axios from "axios"
import { useForm, useFormState } from "react-hook-form"
import { Container } from "../../components/Container"
import { RegisterDivS } from "./styles"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({auth}) => {
    const history = useHistory()
    const notify = (message) => toast.error(message);

    const schema = yup.object().shape({
        name: yup.string().required('The name is mandatory!'),
        email: yup.string().required("Mail adress mandatory!").email("Invalid mail adress!"),
        password: yup.string().required("Password is mandatory!"),
        passwordConfirmation: yup
        .string()
        .required('Please retype your password.')
        .oneOf([yup.ref('password')], 'Your passwords do not match.'),
        course_module: yup.string().required("Module mandatory!")
    })
    
    const {register,handleSubmit, formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })
   

    const showErrors = () => {
        const listErrors = Object.keys(errors)
        if(listErrors.length!==0){
            for (let i=0; i<=listErrors.length;i++){
                console.log(listErrors[i])
                console.log(errors[listErrors[i]])
                notify(errors[listErrors[i]].message)
            }

        }
    }

    const applyRegister = (data) =>{
        const {name,password,email,course_module} = data
        axios.post('https://kenziehub.herokuapp.com/users',{name,password,email,course_module,bio:"MyBio",contact:"/@MyContact"})
            .then((response)=>{
                history.push("/")
            })
            .catch((err)=>{
                console.log(err.message)
                notify(err.message)
            })
            
    }


    return(
        <Container>
                <div className="title">
                    <h1>Kenzie Hub</h1>
                    <button id="Voltar" onClick={()=>history.push("./")}>Login</button> 
                </div>
            <RegisterDivS>
                
                <h2>Crie sua Conta</h2>
                <ToastContainer />
                
                <span>Rápido e grátis, vamos nessa</span>
                <form onSubmit={handleSubmit(applyRegister)}>
                    <label>Nome
                        <input type="text" placeholder="Digite o Nome"    {...register("name")}/>
                    </label>
                    <label>Email
                        <input type="text" placeholder="Digite o Email"   {...register("email")}/>
                    </label>
                    <label>Senha
                        <input  type="password" placeholder="Digite a senha"   {...register("password")}/>
                    </label>
                    <label>Confirmação de Senha
                        <input  type="password" placeholder="Confirme a senha" {...register("passwordConfirm")}/>
                    </label>
                    <label >Selecione o Módulo
                        <select  >
                            <option value="Primeiro módulo (FrontEnd - Algoritimo e Princípios do FrontEnd )" {...register("course_module")}>Primeiro Módulo</option>
                            <option value="Segundo módulo (FrontEnd - POO, Testes e UX)"       {...register("course_module")}>Segundo Módulo</option>
                            <option value="Terceiro módulo (FrontEnd - ReactJs e TypeScript)"  {...register("course_module")}>Terceiro Módulo</option>
                            <option value="Quarto módulo (Backend - Princípios, NodeJS, SQL)"         {...register("course_module")}>Quarto Módulo</option>
                            <option value="Quinto módulo (Backend - Python, DJango)"         {...register("course_module")}>Quinto Módulo</option>
                            <option value="Sexto módulo (Empregabilidade)"         {...register("course_module")}>Sexto Módulo</option>
                        </select>
                    </label>
                    <button type="submit" onClick={()=>showErrors()}>Cadastrar</button>
                </form>
                
            </RegisterDivS>
        </Container>
    )
}
export default Register
