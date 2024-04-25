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
      <Button title="teste1" ></Button>
      <Button title="teste2"  variant='secondary'>Teste2</Button>
      <Link to="/login">Fazer Login</Link>
    </div>
  );
}

export default Home;
