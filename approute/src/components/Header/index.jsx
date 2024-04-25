import React from "react";
import { Button } from "../Button";
import { 
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper

} from './styles'


const  Header = () =>{
    return (
        <Wrapper>
            <Container>
                <Row>
                     <img src="" alt="logo do dio"/>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..."/>                        
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"></Button>
                    <Button title="Sair"></Button>
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}
