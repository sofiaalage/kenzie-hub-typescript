import axios from 'axios';
import { createContext, useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from './userContext';
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'



interface ITechProvider {
    children:any;
}

interface ITechData {
    createTech: (data: {}) => void;
    deleteTech: (techId: string) => void;
}

export const TechContext = createContext<ITechData>({} as ITechData);;
  



export const TechProvider = ({ children }: ITechProvider) => {

    const {user , setUser} = useContext(UserContext)
    
    const history= useNavigate()

    let token = localStorage.getItem('token');
  
    const createTech = (data:{}) => {
        axios.post('https://kenziehub.herokuapp.com/users/techs ', data, {
            headers: {Authorization: `Bearer ${token}`}
          }).then((response) => {window.location.reload();
         }
          )
         
        .catch((err) => console.log(err.response.data.message))
    };

    const deleteTech = (techId:string) => {
        
        axios.delete('https://kenziehub.herokuapp.com/users/techs/' + techId, {
            headers: {Authorization: `Bearer ${token}`}
          }).then((response) => {window.location.reload();})
        .catch((err) => console.log(err.response.data.message))
       
    }

    const editTech = () => {
       
    }


    return (
        <TechContext.Provider value={{ createTech, deleteTech}}>
            {children}
        </TechContext.Provider>    
    );
};


const useTechContext = () => useContext(TechContext);

export { useTechContext };


/*Prosseguindo, crie um novo contexto chamado TechContext, neste criaremos duas funcionalidades:
Uma função de criação de tecnologias, realizando uma requisição na rota /users/techs (POST)
Uma função de exclusão de tecnologias, realizando uma requisição na rota /users/techs/:tech_id (DELETE)
Ambas as funcionalidades deverão ter loading e toast de erro
OBS: ambas as rotas são privadas, por isso não esqueça de enviar o token (presente no localStorage)
 OBS 2: não esqueça, é necessário, mesmo com a requisição, atualizar o estado, para que a renderização
  aconteça instantaneamente na interface.
*/