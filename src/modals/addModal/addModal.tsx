import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { TechContext } from '../../context/techContext';
import { Container, Form} from './style';
import {AiOutlineClose} from 'react-icons/ai'
import FormModal from './formModal';
;

interface IAddTechModal {
    modalOff:()=>void;
}

 function AddTechModal({modalOff}:IAddTechModal){

    const {createTech, deleteTech} = useContext(TechContext)

   

    const formSchema = yup.object().shape({
        title: yup.string().required("Título obrigatório"),
        status: yup.string().required("Campo obrigatório"),
      });
    
      const {register, handleSubmit, formState: { errors }} = useForm({
          resolver: yupResolver(formSchema)
        })
    
       return(
        <Container>
            <div>
                <div className='modalHead'>
                   <h1 className='title'>Cadastrar tecnologia</h1>
                    <button className='close' onClick={modalOff}><AiOutlineClose/></button>
                    
                </div>
                
                <Form onSubmit={handleSubmit((data) => {createTech(data)})}>
                <FormModal
                title={register("title")}
                erros={errors.name && errors.name.message}    
                status={register("status")}
                
                 />  
                </Form>
            </div>
        </Container>
       )
}

export default AddTechModal