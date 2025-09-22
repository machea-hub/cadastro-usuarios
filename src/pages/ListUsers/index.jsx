import { useEffect, useState } from "react"
import api from "../../services/api"
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import { Container, ContainerUsers, CardUsers, TrashIcon, Title, AvatarUser} from "./styles"

import trash from "../../assets/trash.svg"

function ListUsers() {

    const [users, setusers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get("/usuarios")
            console.log(data);

            setusers(data)
            
        }
        getUsers()
    }, [])
    

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
                <TrashIcon src={trash}/>
                </CardUsers>
            ))}
            </ContainerUsers>

            <Button type="button">Voltar</Button>
        </Container>
    )
}

export default ListUsers