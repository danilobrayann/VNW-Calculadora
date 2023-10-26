import styled from "styled-components";
import fund from '../img/1010116.jpg'

export const Main = styled.main`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-image:url(${fund});
width:100vw;
height:100vh;
`

export const H1 = styled.h1`
 color: red;
 padding:50px;
 font-size:80px;
 `



export const Input = styled.input`
 outline:none;
 width:200px;
 padding:5px;
 margin-bottom:20px;
 border-radius:50px;
 background-color:transparent;
 border-color:red;
 color:white;
 text-align:center;
 font-size:20px;
 font-weight:30px;
 `

 export const Button = styled.button`
 width:50px;
 background-color:red;
 color:white;
 font-size:20px;
 border-radius:10px;
 margin: 0px 20px;
 cursor: pointer;
height:50px;

 
 `

 export const P = styled.p`
 font-size:45px;
 color:white;
 margin-top:15px;
 font-weight:800;
 
 `

 export const H2 = styled.h2 `
 
 color:red;
 font-size:30;
 font-weight:500;

 `