import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {Link as LinkS} from 'react-scroll'
import './Project.css';
export default function Scrapped_projects(props) {

const navigate = useNavigate();
  const [Scripted_data, setScripted_data] = useState(props.Scripted_data);

  /* The first argument of useEffect is the actual effect to run, this will run only one time when the 
component renders. 
The return function is the “cleaner” which will behave like “componentWillUnmount” in this specific 
case. 
*/
 
const routeChange = () =>{ 
  window.location.href = `https://www.startengine.com/`+Scripted_data.titlz;    }
 
  /*This hook will trigger each time “updated” value mutates. [updated] this is called dependency array, 
it’s the array where our hook will “listen” to any changes on variables we include in the array and will 
trigger the hook. */
  return (
    <div>
   { Scripted_data ? ( 
      

      <div className="project_card">
      <h3>{Scripted_data.titlz} </h3>
      <Container  > 
     
      {/* <img src={`${process.env.REACT_APP_API_URL_UPLOADS}/${project.images}`}/>      */}
      <img src={`https://image.shutterstock.com/image-vector/thin-line-design-template-website-260nw-603909227.jpg`}/>     

      <Info>
     
                </Info>
                </Container>
                <div className="project_box">
                <p> {Scripted_data.desc} </p>
                </div>
        <ButtonInvest onClick={routeChange}>Invest</ButtonInvest>

                

                    </div>


                    ): (
                      <p>Product not found</p>
                    )
                  }</div>
    
  );
}




const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
&:hover ${Info}{
  opacity: 1;
}
`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

const Image = styled.img`
height: 75%;
z-index: 2;
`;


export const ButtonInvest = styled(LinkS)`
    color:#fff;
    background:#F57C00;
    font-size:1.2rem;
    font-weigth:600;
    padding:.7rem 3rem;
    border-radius:.5rem;
    border:none;
    cursor:pointer;

    display: flex;
    align-items: center;
    justify-content: center;

`

const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
 
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
const ProductFrameBest = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: #DB7093;
  margin: 10px;
  display: flex;
  flex-direction: column;
  animation:  clignote 2s linear infinite;
  @keyframes clignote {  
  50% { opacity: 0.5; }
}
`;
const ProductImageWrapperBest = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImageBest = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapperBest = styled.div`
  color:white;
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const Action = styled.footer`
  background: transparent;
  grid-area: footer;
  padding: 0.25rem;
  text-align: right !important;
`;
const ButtonDelete = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "red" : "white"};
  color: ${props => props.primary ? "white" : "red"};
  font-size: 1.1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;
const ButtonUpdate = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "blue" : "white"};
  color: ${props => props.primary ? "white" : "blue"};
  font-size: 1.1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;