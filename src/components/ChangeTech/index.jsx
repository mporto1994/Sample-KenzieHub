import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { ChangePopup } from './styles';

export const ChangeTech = ({handleClose,open,tech}) => {

    const {register,handleSubmit, formState:{errors}}=useForm({})
    const [token]=useState(JSON.parse(localStorage.getItem("@Kenziehub:token")))
    const [userData]=useState(JSON.parse(localStorage.getItem("@Kenziehub:user")))
    
    const changeTech = (data) => {
        console.log(data)
        axios.put(`https://kenziehub.herokuapp.com/users/techs/${tech.id}`,data, {headers: { Authorization: `Bearer ${token}` }})
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

    const deleteTech = () => {
      axios.delete(`https://kenziehub.herokuapp.com/users/techs/${tech.id}`, {headers: { Authorization: `Bearer ${token}` }})
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
      <>
      <ChangePopup tech={open}>
      <form onSubmit={handleSubmit(changeTech)}>
        <div className='head'>
          <h2>Tecnologia Detalhes</h2>
          <button className="close" onClick={()=>handleClose()}>x</button>
        </div>
        <div className='body'>
          <div className='TechnoDiv'>
            <h2>Tech</h2>
            <p>{tech.title}</p> 
          </div>
          
          <label htmlFor="">Status
              <select type="text" {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
              </select>
          </label>
          <div>
            <button type="submit" className='saveBut'>Salvar Mudanças</button>
            <button onClick={()=>deleteTech()} className='delTech'>Deletar</button>
          </div>
        </div>
      </form>
    </ChangePopup>

    
    </>
  );
}

