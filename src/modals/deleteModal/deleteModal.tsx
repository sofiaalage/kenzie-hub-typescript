import { useContext } from "react";
import { Interface } from "readline";
import { TechContext } from "../../context/techContext";
import { UserContext } from "../../context/userContext";
import { Container } from "../addModal/style";

interface IDeleteModal{

    deleteModalOff: any;
    techId: string

}


function DeleteModal({deleteModalOff, techId}: IDeleteModal){
    const {deleteTech} = useContext(TechContext)
    return(
        <Container>
            <div>
                <h1>Deseja excluir essa Tecnologia?</h1>
                <button onClick={() => {deleteTech(techId)}}>Excluir</button>
                <button onClick={deleteModalOff}>Cancelar</button>
            </div>
        </Container>
    )
    

}

export default DeleteModal 