import React from 'react'

import { CardContainer, 
         Content,
         HasInfo,
         ImageBackground,
         PostInfo,
            UserInfo,
        UserPicture
    
} from './styles'  
import { FiThumbsUp } from 'react-icons/fi'

const Card = ()=> {
  return (
    <CardContainer>
        <ImageBackground src="https://80000horas.com.br/wp-content/uploads/2023/09/px545998-image-kwvxpwdv.jpg"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/105677816?v=4"/>
                <div>
                    <h4>Reginaldo Santana</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para Curso React</h4>
                <p>Projeto feioto Curso Formação React Bootcamp... <strong>Saiba mais..</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS # JavaScript</h4>
                <p>
                    <FiThumbsUp/> 16
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}


export {Card}
