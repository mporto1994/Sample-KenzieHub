import { useHistory } from "react-router-dom"
import { Container } from "../../components/Container"
import { LoginDivS } from "./styles"
import axios from "axios"
import { useForm, useFormState } from "react-hook-form"
import { RegisterDivS } from "./styles"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Redirect } from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({auth, setAuth}) => {
    const history = useHistory()
    const notify = (message) => toast.error(message);


    const schema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),
    })

    const {register,handleSubmit, formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })

    const makeLogin = (data) =>{
        // console.log(data)
        axios.post('https://kenziehub.herokuapp.com/sessions',data)
            .then((response)=>{
                const {token} = response.data;
                // console.log(response);

                localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
                localStorage.setItem("@Kenziehub:user", JSON.stringify(response.data.user));

                setAuth(true);
                history.push("/home");
            })
            .catch((err)=>{
                // console.log(err.message)
                notify(err.message)
            })
        // history.push("/")
    }

    if(auth){
        return <Redirect to="/home"/>
    }

    return(
        <Container>
            <h1>Kenzie Hub</h1>
            <LoginDivS>
                <h2>Login</h2>
                <form onSubmit={handleSubmit(makeLogin)}>
                    <label htmlFor="">Email
                        <input type="text" {...register("email")}/>
                    </label>
                    <label htmlFor="">Senha
                        <input type="password" {...register("password")}/>
                    </label>
                    <button type="submit">Entrar</button>
                </form>
                <span>Ainda não possui uma conta?</span>
                <button onClick={()=>history.push("/Register")}>Cadastre-se</button>
            </LoginDivS>
        </Container>
    )
}
export default Login
