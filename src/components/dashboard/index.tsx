
import { Container } from './style'
import {  useUserContext } from '../../context/userContext'
import { useContext, useState } from 'react'
import AddTechModal from '../../modals/addModal/addModal'
import { TechContext } from '../../context/techContext'
import   {AiFillPlusSquare} from 'react-icons/ai'
 import   {BsFillTrashFill} from 'react-icons/bs'
import DeleteModal from '../../modals/deleteModal/deleteModal'
import 'animate.css';
import { useNavigate } from 'react-router-dom'





 
const  Dashboard= () =>{

   const {user , setUser} = useUserContext();
   const {createTech} = useContext(TechContext)
   const [modal,setModal] = useState(false)  
   
   const[deleteModal, setDeleteModal] = useState(false)

   const [techId, setTechId] = useState("")
   const history = useNavigate();

    const deleteById = (techIdToDelete:any) => {
      setTechId(techIdToDelete)
      setDeleteModal(true)
    }
    
     return(
        <Container>
         {modal ? <AddTechModal modalOff={() => setModal(false)}/> : null}
         {deleteModal ? <DeleteModal deleteModalOff={() => setDeleteModal(false)} techId={techId}/> : null}
         <nav >
               <h1  >Kenzie Hub</h1>
               <button  onClick={() => history('/login')}>Sair</button>
         </nav>
         <header>
                  <h1 >Olá {user.name}</h1>
                  <h1 className='modulo' >{user.course_module}</h1>
            
         </header>
         <main >
            <div className='main-header'>
                  <h1 className='Tech'>Tecnologias</h1>
                  <button onClick={() => setModal(true)} className='buttonTech'><AiFillPlusSquare/></button>
                  
               </div>     
            
            <div className='main-body'>
                   {user.techs !== undefined ? user.techs.length === 0 ? <div onClick={() => setModal(true)} className='buttonadicionar'><AiFillPlusSquare/>TECH</div> : null : null}
                     {
                        user.techs !== undefined &&
                           user.techs.map((tech,index) => (
                                 <div className='Tech-div'key={'tech_' + tech.id}>
                                    <div>
                                       <p className='tech-name'>{tech.title}</p>
                                    </div>   
                                    <div className='divTwo-Tech'>
                                       <p className='status-name'>{tech.status}</p>
                                       <p className='tech-button' onClick={() => {
                                          deleteById(tech.id)
                                       }}>
                                             <BsFillTrashFill/>
                                       </p>
                                      
                                    </div>   
                                    
                                 </div>
                              )
                           )
                     }
            </div>
               
         </main>
        </Container>
       
     )
}

export default Dashboard