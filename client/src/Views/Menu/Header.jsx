import React, {useState} from 'react';
import styled from 'styled-components'; 
import MyPage from "../Modals/MyPage"
import SignIn from '../Modals/SignIn';
import SignUp from '../Modals/SignUp';
import {Link} from "react-router-dom"
import axios from 'axios';


axios.defaults.baseURL = `http://ec2-13-124-229-42.ap-northeast-2.compute.amazonaws.com`;
axios.defaults.withCredentials = true;

// header 공통
const HeaderContainer = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
`;

const Navbar = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
background-color: #fff;
padding: 8px 12px;
`;

const NavbarLogo = styled.div`
display: flex;
font-size: 24px;
    > img {
    display: inline-block;
    width: 25px;
    height: 25px;
    }
    > a {
    display: inline-block;
    color: black;
    font-weight: bold;
    margin-left: -200px;
    margin-bottom: 7px;
    cursor: pointer;
    }
`;

const NavbarMenu = styled.div`
    display: flex;
    list-style: none;
    padding-left: 0;
    color: black;
    font-size: 24px;
    font-weight: bold;
   
  > li {
    padding: 8px 12px;
    color: black;
    cursor: pointer;
    margin-right: 100px;
    }
  > li:last-child{
      margin-right: 150px;
  }
`;

const NavbarIcons = styled.div`
  display: flex;
  list-style: none;
  padding-left: 0;
  > button {
      font-size: 18px;
      background-color: #fff;
      padding: 8px 12px;
      color: #fff;
      border: 1px solid #616161;
      border-radius: 8px;
      background-color: #404f77;
      margin-right: 15px;
      cursor: pointer;
  }
  > button:last-child{
      margin-right: 0;
      background-color: #000023;
      color: #fff;
  }
`;

const Header = ({mainDummy}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const loginHandler = async (e) => {
      e.preventDefault(); 

    const URL = `/user/login`;
    const PAYLOAD = {
      email: loginInfo.email,
      password: loginInfo.password,
    }
    const OPTION = {};

    let response = null;
    try {
      response = await axios.post(URL, PAYLOAD, OPTION);
      console.log('POST /user/login 요청에 성공했습니다.');
    } catch(error) {
      response = error.response;
      alert("이메일과 비밀번호를 확인하세요.")
      console.log('POST /user/login 요청에 실패했습니다.');
    } finally {
      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.data.accessToken);
        setIsLogin(true)
      }
    }
  };

  const logoutHandler = async () => {
    const URL = `/user/signout`;
    const OPTION = {};
  
    let response = null;
    try {
      response = await axios.post(URL, OPTION);
      console.log('POST /user/signout 요청에 성공했습니다.');
    } catch(error) {
      response = error.response;
      console.log('POST /user/signout 요청에 실패했습니다.');
    } finally {
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem('accessToken', '');
        console.log('accessToken:', localStorage.getItem('accessToken'));
      }
    }
  };
  

  const haldleLogout = () => {
      setIsLogin(false)
      logoutHandler()
  }

    return (
    <HeaderContainer>
        <Navbar>
            <NavbarLogo>
                {mainDummy.map((el, i) => {
                    return( 
                        <>
                    <img key={i} src={el.mainurl} />
                    </>
                    )
                })}
            </NavbarLogo>
            <NavbarLogo>
                <a><Link to="/" style={{color: 'black'}}>FourmenAir</Link></a>
            </NavbarLogo>
            <NavbarMenu>            
                <li>
                    <Link to="/" style={{color: 'black'}}>Home</Link>
                </li>
                <li>
                    <Link to="/local" style={{color: 'black'}}>Local</Link>
                </li>
            </NavbarMenu>

            <NavbarIcons>
                {isLogin === false ? (
                    <>
                    <SignIn loginHandler={loginHandler} handleInputValue={handleInputValue} />
                    <SignUp />
                    </>
                ) : (
                    <>
                    <MyPage />
                    <button onClick={haldleLogout}>
                        <Link to="/" style={{color: 'white'}}>Log out</Link>
                    </button>    
                    </>
                )}
                
            </NavbarIcons>
        </Navbar>
    </HeaderContainer>
    )
}




export default Header;