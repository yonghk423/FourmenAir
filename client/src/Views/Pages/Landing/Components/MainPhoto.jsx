import React from 'react';
import styled from 'styled-components'; 

const MainPhoto = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  > img {
    width: 100%;
    height: 900px;
  }
  > h1 {
    color: #fff;
    font-size: 50px;
    position: absolute;
    top: 20%;
    left: 41%;
    
  }
  > p {
    color: black;
    font-size: 30px;
    padding: 15px 30px;
    position: absolute;
    top: 35%;
    left: 29.5%;
    background-color: hsla(0, 0%, 100%, 0.35);
  }
& * {
  font-weight: normal;
  letter-spacing: 0.2em;
  text-align: center;
  margin: 0 auto;

}
`;


const MainPagePhoto = () => {

  return(
    <MainPhoto>
      <h1>FourmenAir</h1>
      <p>지친 당신에게 차박, 소소한 행복을 추천합니다.</p>
      <img src="https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1muT/image/OAH7Cce35bMqNAWgigJLiZvOWss.jpg" alt="메인 이미지" />
    </MainPhoto>  
  )
}

export default MainPagePhoto;