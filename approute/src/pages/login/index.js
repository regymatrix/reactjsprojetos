import { Link } from 'react-router-dom'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import {MdEmail, MdLock} from 'react-icons/md'
import {
  Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper
} from './styles'
import { useNavigate } from 'react-router-dom/dist';
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup.object({
  email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
  password: yup.string().min(3,'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

function Login() {
  
  const navigate = useNavigate();
  const handleClickSignIn=()=>{
    navigate('/feed')
  }

  const {
    control,
    handleSubmit,    
    formState: { errors, isValid }  } = useForm({
      resolver: yupResolver(schema),
      mode: 'onChange',
    });
  
  console.log(isValid, errors)

  const onSubmit = data => console.log(data);

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input errorMessage={errors.email && errors.email.message}  name="email" control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
              <Input  errorMessage={errors.password && errors.password.message} name="password" control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              {/* <Button title="Entrar sem Form" variant="primary" onClick={handleClickSignIn} type="button"></Button> */}
              <Button title="Entrar" variant="primary"  type="submit"></Button>
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

