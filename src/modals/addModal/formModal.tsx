
import { FormLoginDiv } from "./style";




interface IFormLogin {
    title: any;
    status: any;
    erros:any
  }
  


 const FormModal = ({ title, erros, status }: IFormLogin) => (
    <FormLoginDiv>
         return(
     <form>
        <h3 >Título</h3>
            <input className='input' placeholder='Digite aqui o título' {...title}/>
            {erros}

        <h3 >Selecionar nível</h3>
        <select className='input' {...status}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
        </select>
        <div>
            <button className='submit' type='submit'>Cadastrar</button>
        
        </div>

     </form>
     
)
    </FormLoginDiv>
   
 )
  
  export default FormModal;
  