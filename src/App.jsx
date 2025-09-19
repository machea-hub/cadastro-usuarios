/*
  Exportar "Padrão" -> Uma coisa só por pagina
  apenas exportar
*/
import{ Container, Title, TopBackground, Form, ContainerInputs, Input, Button, InputLabel } from './styles'

function Home() {  
  return (
  
      <Container>
        <TopBackground>
          <img/>
        </TopBackground>

        <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do Usuário' />
            </div>
            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do Usuário' />
            </div>
          </div>
          <div>
            <InputLabel>
              E-mail<span>*</span>
            </InputLabel>
            <Input type='email' placeholder='E-mail do Usuário' />
          </div>
        </ContainerInputs>
        <Button>Cadastrar Usuário</Button>

        </Form>
      </Container>
  )
}

export default Home
