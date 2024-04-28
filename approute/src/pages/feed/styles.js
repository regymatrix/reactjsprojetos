import styled from "styled-components";


export const Container = styled.main`
   width: 100%;
   max-width: 80%;
   margin: 0 auto;
   margin-top: 120px;

   display: flex;
   flex-direction: row;
   justity-content: space-between;
   align-items: flex-start;
`

export const Title = styled.h2`
   font-family: 'Open-Sans';
   font-style: normal;
   font-weight: 700;
   font-size: 32px;
   width: 320px;
   margin-bottom: 20px;
   line-height: 44px;

   color: #FFFFFF;
`

export const  TitleHighlight = styled.span`
   font-family: 'Open-Sans';
   font-style: normal;
   font-weight: 700;
   font-size: 14px;
   margin-bottom: 24px;
   line-height: 25px;
   color: #FFFFFF78;
`

export const Column = styled.div`
  flex: ${({flex})=>flex};
  padding-right: 24px;
  

`