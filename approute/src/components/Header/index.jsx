import React from "react";
import { Button } from "../Button";
import { 
    BuscarInputContainer,
    Column,
    Container,
    ImgLogo,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper,    

} from './styles'


const  Header = ({autenticado}) =>{
    return (
        <Wrapper>
            <Container>
                <Row>
                    <ImgLogo src="https://hermes.digitalinnovation.one/assets/diome/logo-full.svg" alt="logo do dio"/>

                    {autenticado ? ( 
                    <>
                        <BuscarInputContainer>
                        <Input placeholder="Buscar..."/>                        
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                    ) : null}
                  
                </Row>
                <Row>
                    {autenticado ? ( 
                     <>
                       <UserPicture  src="https://avatars.githubusercontent.com/u/105677816?v=4"    />
                     </>
                    ): (
                    <>
                         <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar"></Button>
                        <Button title="Sair"></Button>
                    </>
                    )}
                 
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}
