import { useEffect, useState } from "react"
import api from "../../services/api"
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import { Container, ContainerUsers, CardUsers, TrashIcon, Title, AvatarUser} from "./styles"

import trash from "../../assets/trash.svg"

function ListUsers() {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get("/usuarios")
            console.log(data);

            setUsers(data)
            
        }
        getUsers()
    }, [])
    
    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const updateUsers = users.filter ( user => user.id !== id)

        setUsers(updateUsers)
    }

    return (
        <Container>
            <TopBackground />
            <Title>Listagem de Usuários</Title>


            <ContainerUsers>
            {users.map((user) => (
                <CardUsers key={user.id}>
                
                <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>

                <div>
                    <h3>{user.name}</h3>
                    <p>{user.age} anos</p>
                    <p>{user.email}</p>
                </div>
                <TrashIcon src={trash} alt="trash-icon" onClick={() => deleteUsers(user.id)}/>
                </CardUsers>
            ))}
            </ContainerUsers>

            <Button type="button" onClick={() => navigate("/")}>Voltar</Button>
        </Container>
    )
}

export default ListUsers