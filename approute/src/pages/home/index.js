import { Link } from 'react-router-dom'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import {
  Container, TextContent, Title, TitleHighlight
} from '/.styles'

function Home() {
  return (
    <div className="HomeClass">
      <Header/>
      <Container>
        <div>
          <Title> 
            <TitleHighlight>
                  Implemente  
                  <br/>
                  O seu futuro global agora!
            </TitleHighlight>
          </Title>
          <TextContent>
            
          </TextContent>
        </div>
        <div>
          <img src="" alt="Imagem principal"/>
        </div>

      </Container>
    </div>
  );
}

export default Home;
