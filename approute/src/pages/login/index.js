import { Link } from 'react-router-dom'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import {MdEmail, MdLock} from 'react-icons/md'
import {
  Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper
} from './styles'
import { useNavigate } from 'react-router-dom/dist';

function Login() {

  
  const navigate = useNavigate();

  const handleClickSignIn=()=>{
    navigate('/feed')
  }

  return (<>
      <Header/>
      <Container>
        <Column>
          <Title> 
            A platafomra para você aprender com expert, dominiar as principais tecnologias  e entrar mais rapido nas empresas desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastrado</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change...</SubtitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
              <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              <Button title="Entrar" variant="primary" onClick={handleClickSignIn} type="button"></Button>
            </form>
          </Wrapper>
          <Row>
            <EsqueciText>Esqueci a senha</EsqueciText>
            <CriarText>Criar Conta</CriarText>
          </Row>
        </Column>

        
      </Container>
    </>
  );
}

export default Login;

