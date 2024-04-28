import { Link } from 'react-router-dom'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import {
  Container, TextContent, Title, TitleHighlight
} from './styles'
import { useNavigate } from 'react-router-dom/dist';


function Home() {

  const navigate = useNavigate();

  const handleClickSignIn=()=>{
    navigate('/login')
  }
  return (
   <>
      <Header autenticado={false} />
      <Container>
        <div>
          <Title> 
            <TitleHighlight>
                  Implemente  
                  <br/>             
            </TitleHighlight>
            O seu futuro global agora!
          </Title>
          <TextContent>
           Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare o seu novo desafio profissional,
           evoluindo em comunidade com os melhores experts. 
          </TextContent>
          <Button title="Começar agora" variant="primary" onClick={handleClickSignIn} />
        </div>
   
        <div>
          <img src="" alt="Imagem principal"/>
        </div>

      </Container>
      </>
  );
}

export default Home;
