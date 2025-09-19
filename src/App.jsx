/*
  Exportar "Padrão" -> Uma coisa só por pagina
  apenas exportar
*/
import{ Container, Title, TopBackground, Form, ContainerInputs, Input, Button, InputLabel } from './styles'

import UsersImage from "./assets/users.png"

function Home() {  
  return (
  
      <Container>
        <TopBackground>
          <img src={UsersImage} alt="Usuários" />
        </TopBackground>

        <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
            <div>
              <InputLabel>
                Nome <span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do Usuário' />
            </div>
            <div>
              <InputLabel>
                Idade <span>*</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do Usuário' />
            </div>
        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail <span>*</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail do Usuário' />
        </div>
        <Button>Cadastrar Usuário</Button>

        </Form>
      </Container>
  )
}

export default Home
