import { Link } from 'react-router-dom'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import {
  Container, TextContent, Title, TitleHighlight, Column
} from './styles'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

function Feed() {
  return (<>  
      <Header  autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Column>
        <Column flex={1}>
          <TitleHighlight>Ranking 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo nome="regymatrix" image="https://avatars.githubusercontent.com/u/105677816?v=4" percentual={10}/>        
          <UserInfo nome="regymatrix" image="https://avatars.githubusercontent.com/u/105677816?v=4" percentual={30}/>        
          <UserInfo nome="regymatrix" image="https://avatars.githubusercontent.com/u/105677816?v=4" percentual={90}/> 
          <UserInfo nome="regymatrix" image="https://avatars.githubusercontent.com/u/105677816?v=4" percentual={5}/> 
          <UserInfo nome="regymatrix" image="https://avatars.githubusercontent.com/u/105677816?v=4" percentual={80}/> 
        </Column>
      </Container>
    </>
  );
}

export default Feed;


