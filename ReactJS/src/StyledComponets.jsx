import React from 'react'
import styled from 'styled-components'

function StyledComponets() {

    const MyH1=styled.h1`
    font-size: 50px;
    color: orange;
    font-weight: 900;
    line-height: 55px;
    `;

     const MyH2=styled.h2`
    font-size: 20px;
    color: yellow;
    font-weight: 900;
    line-height: 55px;
    background-color:black;
    `;

    const PrimaryBtn = styled.button`
    background-color:green;
    padding:10px;
    color:white;
    `;

  return (
    <div>
        <h1>Styled Components</h1>
        <MyH1>this is heading using styled components</MyH1>
        <MyH2>this is heading using styled components</MyH2>
        <PrimaryBtn>Click Here</PrimaryBtn>

    </div>
  )
}

export default StyledComponets