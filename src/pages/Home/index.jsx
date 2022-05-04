import axios from "axios"
import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { AddTech } from "../../components/AddTech"
import { ChangeTech } from "../../components/ChangeTech"
import { Container } from "../../components/Container"
import { TechCard } from "../../components/TechCard"
import { HomeS } from "./styles"

const Home = ({auth,setAuth}) => {
    const [addTech,setAddTech] = useState(false)
    const [changeTech,setChangeTech] = useState(false)
    const [currentTech,setCurrentTech] = useState()
    const [techs, setTechs] = useState()
    const history=useHistory()

    const [token]=useState(JSON.parse(localStorage.getItem("@Kenziehub:token")))
    const [userData]=useState(JSON.parse(localStorage.getItem("@Kenziehub:user")))
    // console.log(token)
    // console.log(userData)

    useEffect(()=>{
        axios.get(`https://kenziehub.herokuapp.com/users/${userData.id}`, {headers: { Authorization: `Bearer ${token}` }})
          .then((response)=>{
              // const {token} = response.data;
                setTechs(response.data.techs)
              // localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
              // localStorage.setItem("@Kenziehub:user", JSON.stringify(response.data.user));

              // setAuth(true);
              // history.push("/home");
          })
          .catch((err)=>{
              console.log(err)
          })
        },[techs])
        // history.push("/")
        

    
    
    if(!auth){
        return <Redirect to="/"/>
    }
    // console.log(userData.techs)

    return(
        <> 
        { addTech && <AddTech handleClose={()=>setAddTech(false)} open={addTech} />}
        { changeTech && <ChangeTech handleClose={()=>setChangeTech(false)} open={changeTech} tech={ currentTech != undefined ? currentTech : {id:"",title:"",status:""}}/> }

        <HomeS  tech={addTech}> 
            
            <Container>
                <nav>
                    <h1>Kenzie Hub</h1>
                    <button onClick={(()=>setAuth(false))}>Sair</button>
                </nav>
                <header>
                    <h2>Olá {userData.name}!</h2>
                    <p>Primeiro Modulo</p>
                </header>
                <div className="TecnologiasDiv">
                    <div className="TecHeadDiv">
                        <h2>Tecnologias</h2>
                        <button onClick={()=>setAddTech(true)}>+</button>
                    </div>
                    <div className="TecBodyDiv">
                        {techs && techs.map((item)=>(
                        <button  onClick={()=>{setChangeTech(true);setCurrentTech(item)}}>
                            <TechCard tech={item}/>
                        </button>))}
                    </div>
                </div>
               
                
            </Container>
        </HomeS>
        </>
        
    )
}
export default Home
