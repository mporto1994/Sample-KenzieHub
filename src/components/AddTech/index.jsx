
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { AddPopup } from './styles';
import { display, flexbox } from '@mui/system';

export const AddTech = ({handleClose,open}) => {

    const {register,handleSubmit, formState:{errors}}=useForm({})
    const [token]=useState(JSON.parse(localStorage.getItem("@Kenziehub:token")))
    
    const createTech = (data) => {
        console.log(data)
        axios.post('https://kenziehub.herokuapp.com/users/techs',data, {headers: { Authorization: `Bearer ${token}` }})
            .then((response)=>{
                // const {token} = response.data;
                console.log(response);

                // localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
                // localStorage.setItem("@Kenziehub:user", JSON.stringify(response.data.user));

                // setAuth(true);
                // history.push("/home");
                handleClose()
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return (
    <AddPopup tech={open}>
      <form onSubmit={handleSubmit(createTech)}>
        <div>
          <h2>Cadastre sua tecnologia</h2>
          <button className="close" onClick={()=>handleClose()}>x</button>
        </div>
        <label htmlFor="">Nome
            <input type="text" {...register("title")}/>
        </label>
        <label htmlFor="">Status
            <select type="text" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
        </label>
        <button type="submit">Criar</button>
    </form>
  </AddPopup>
  );
}

