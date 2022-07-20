import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const BORDER_DEV = ``;
axios.defaults.baseURL = `http://ec2-13-124-229-42.ap-northeast-2.compute.amazonaws.com`;
axios.defaults.withCredentials = true;

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.75);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
  `;

export const ModalBtn = styled.button`
  background-color: #eee5ec;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: #0a0a0a;
  cursor: pointer;
  `;

export const ModalView = styled.div`
position: relative;
text-align: center;

> div.close_btn {
  margin-top: 5px;
  cursor: pointer;
}

> div.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 50px;
  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

> div.box span {
      position: absolute;
      top: 3px;
      right: 5px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }
    
    > div.box h1 {
      margin: 0 0 30px;
      padding: 0;
      color: #fff;
      text-align: center;
      font-size: 30px;
    }
    
    > div.box .inputBox {
      position: relative;
    }

    > div.box .inputBox input {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      color: #fff;
      letter-spacing: 1px;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      background: transparent;
    }

    > div.box .inputBox label {
      position: absolute;
      top: 0;
      left: 0;
      letter-spacing: 1px;
      padding: 10px 0;
      font-size: 18px;
      color: #fff;
      pointer-events: none;
      transition: 0.5s;
    }

    > div.box .inputBox input:valid ~ label {
        top: -18px;
        left: 0;
        color: #03a9f4;
        font-size: 12px;
      }
    > div.box .register {
      color: #03a9f4;
    }
    
    > div.box input {
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      background: #03a9f4;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 5px;
      font-size: 16px;
      margin-top: 15px;
      margin-bottom: 20px;
    }

    > div.box input:last-child{
      margin-right: 0;
    }

    > div.box a {   
      color: #fff;
      margin-left: 2%;
    }

    > div.box .radioBox {
      border: ${BORDER_DEV};
      position: relative;
      
      > input {
        width: 15px;
        height: 15px;
        margin-left: 30px;
      }

      > label {
        font-size: 16px;
        color: #fff;
        letter-spacing: 1px;
        outline: none;
        margin-left: 5px;
        margin-right: 30px;
      }
    }

    > div.box .vaild-check-box {
      border: ${BORDER_DEV};
      position: relative;
      height: 20px;

      > .vaild-check-msg {
        position: absolute;
        top: 0;
        width: 100%;
        font-size: 16px;
        color: #fff;
        letter-spacing: 1px;
        outline: none;
        background: transparent;
      }
    }

    > div.box .submit-result-table {
      position: relative;
      height: 20px;

      > span {
        display: none;
        position: absolute;
        top: 0;
        width: 100%;
        font-size: 16px;
        color: #fff;
        letter-spacing: 1px;
        outline: none;
        background: transparent;
        transition: all 1.5s ease-out;
      }
    }

`;

const SignUpModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVaildEmail, setIsVaildEmail] = useState(false);
  const [isVaildName, setIsVaildName] = useState(false);
  const [isVaildMobile, setIsVaildMobile] = useState(false);
  const [isVaildGender, setIsVaildGender] = useState(false);
  const [isVaildPassword, setIsVaildPassword] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const submitResultControl = useRef();

  const initialValue = {
    email: "",
    name: "",
    mobile: "",
    image: "",
    gender: "",
    password: "",
  };
  const [inputUserInfo, SetInputUserInfo] = useState(initialValue);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const initialValue = {
      email: "",
      name: "",
      mobile: "",
      image: "",
      gender: "",
      password: "",
    };
    SetInputUserInfo(initialValue);
  }, [isOpen]);

  const vaildGenderCheck = (input) => {
    return input !== '';
  };

  const vaildEmailCheck = (input) => {
    const pattern = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    return pattern.test(input);
  };

  const vaildMobileCheck = (input) => {
    const pattern = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    return pattern.test(input);
  };

  const vaildNameCheck = (input) => {
    const pattern = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\s]{2,10}$/;
    return pattern.test(input);
  };

  const vaildPasswordCheck = (input) => {
    const pattern = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9]{4,15}$/;
    return pattern.test(input);
  };

  useEffect(() => {
    if (inputUserInfo.password === '') {
      setIsPasswordEmpty(true);
    } else {
      console.log('비밀번호 칸이 비어있지 않습니다.');
      setIsPasswordEmpty(false);
    }

    if (vaildPasswordCheck(inputUserInfo.password)) {
      console.log('형식에 맞는 비밀번호입니다.')
      setIsVaildPassword(true);
    } else {
      setIsVaildPassword(false);
    }

    if (vaildNameCheck(inputUserInfo.name)) {
      console.log('형식에 맞는 이름입니다.')
      setIsVaildName(true);
    } else {
      setIsVaildName(false);
    }

    if (vaildMobileCheck(inputUserInfo.mobile)) {
      console.log('형식에 맞는 전화번호입니다.')
      setIsVaildMobile(true);
    } else {
      setIsVaildMobile(false);
    }

    if (vaildEmailCheck(inputUserInfo.email)) {
      console.log('형식에 맞는 이메일입니다.')
      setIsVaildEmail(true);
    } else {
      setIsVaildEmail(false);
    }

    if (vaildGenderCheck(inputUserInfo.gender)) {
      console.log('형식에 맞는 성별입니다.')
      setIsVaildGender(true);
    } else {
      setIsVaildGender(false);
    }
  }, [inputUserInfo]);

  const submitButtonHandler = (e) => {
    e.preventDefault();
    if (!isPasswordEmpty && isVaildPassword && isVaildEmail && isVaildName && isVaildMobile && isVaildGender) {
      console.log('모두 양식에 맞습니다.');
      fetchSubmittedInfo((result) => {
        if (result === 'success') {
          submitResultControl.current.style.display = "inline-block";
          setTimeout(() => {
            submitResultControl.current.style.display = "none";
            setTimeout(() => {
              setIsOpen(false);
            }, 500);
          }, 1000);
        }
      });
    } else {
      console.log('양식에 맞지 않습니다.');
    }
  };
  
  const fetchSubmittedInfo = async (callback) => {
    const URL = `/user/signup`;
    const BASE64_IMAGE = `https://preview.redd.it/2rcjpn4o1sn51.png?width=440&format=png&auto=webp&s=c372e948dbd9efe0aad20ae54382f9244c9110b6`;
    const MOBILE = inputUserInfo.mobile;
    const GENDER = inputUserInfo.gender;
    const NAME = inputUserInfo.name;
    const EMAIL = inputUserInfo.email;
    const PASSWORD = inputUserInfo.password;
  
    const PAYLOAD = {
      name: NAME,
      email: EMAIL,
      password: PASSWORD,
      mobile: MOBILE,
      gender: GENDER,
      image: BASE64_IMAGE,
    }
    const OPTION = {};
  
    let response = null;
    try {
      response = await axios.post(URL, PAYLOAD, OPTION);
      console.log('POST /user/signup 요청에 성공했습니다.');
      callback('success');
    } catch(error) {
      response = error.response;
      console.log('POST /user/signup 요청에 실패했습니다.');
      callback('failed');
    } finally {
      console.log(response);
    }
  };

  const inputValueHandler = (e, tag) => {
    const inputValue = e.target.value;
    if (tag === 'email') {
      const newValue = {...inputUserInfo, email: inputValue};
      SetInputUserInfo(newValue);
    } else if (tag === 'name') {
      const newValue = {...inputUserInfo, name: inputValue};
      SetInputUserInfo(newValue);
    } else if (tag === 'mobile') {
      const newValue = {...inputUserInfo, mobile: inputValue};
      SetInputUserInfo(newValue);
    } else if (tag === 'password') {
      const newValue = {...inputUserInfo, password: inputValue};
      SetInputUserInfo(newValue);
    } else if (tag === 'gender') {
      const newValue = {...inputUserInfo, gender: inputValue};
      SetInputUserInfo(newValue);
    }
  };

  useEffect(() => {
    console.log(inputUserInfo);
  }, [inputUserInfo]);

  return (
    <>
        <ModalBtn onClick={openModalHandler}>
          {isOpen === false ? 'sign up' : 'sign up'}
        </ModalBtn>
        {isOpen === true ? <ModalBackdrop>
          <ModalView>
          <div className='box'>
          <span onClick={openModalHandler} className='close-btn'>&times;</span>
          <h1 align="center">Sign Up</h1>
          <form>
      
            <div class="inputBox">
              <input type="text" name="email" autocomplete="off" onChange={(e) => inputValueHandler(e, 'email')} required />
              <label>email</label>
            </div>

            <div className="vaild-check-box">
            {!isVaildEmail && inputUserInfo.email !== '' ? <span className="vaild-check-msg">형식에 맞는 이메일을 입력해 주세요.</span> : null}
            </div>
            
            <div class="inputBox">
              <input type="text" name="text" autocomplete="off" onChange={(e) => inputValueHandler(e, 'name')} required />
              <label>Name</label>
            </div>

            <div className="vaild-check-box">
            {!isVaildName && inputUserInfo.name !== '' ? <span className="vaild-check-msg">형식에 맞는 닉네임을 입력해 주세요.</span> : null}
            </div>

            <div class="inputBox">
              <input type="password" name="password" autocomplete="off" onChange={(e) => inputValueHandler(e, 'password')} required />
              <label>Password</label>
            </div>

            <div className="vaild-check-box">
            {!isVaildPassword && inputUserInfo.password !== '' ? <span className="vaild-check-msg">형식에 맞는 비밀번호를 입력해 주세요.</span> : null}
            </div>

            <div class="inputBox">
              <input type="tel" name="tel" autocomplete="off" required onChange={(e) => inputValueHandler(e, 'mobile')} />
              <label>Phone Number</label>
            </div>

            <div className="vaild-check-box">
            {!isVaildMobile && inputUserInfo.mobile !== '' ? <span className="vaild-check-msg">형식에 맞는 전화번호를 입력해 주세요.</span> : null}
            </div>

            <div class="radioBox">
              <input type="radio" id='scales1' name="scales" autocomplete="off" onChange={(e) => inputValueHandler(e, 'gender')} value="male" />
              <label for="scales1">male</label>

              <input type="radio" id='scales2' name="scales" autocomplete="off" onChange={(e) => inputValueHandler(e, 'gender')} value="female" />
              <label for="scales2">female</label>
            </div>

            <div className="vaild-check-box">
            {!isVaildGender ? <span className="vaild-check-msg">성별을 입력해 주세요.</span> : null}
            </div>

            <div class="submit-result-table">
              <span ref={submitResultControl}>회원가입 완료</span>
            </div>

            <input type="submit" name="회원가입" value="OK" onClick={submitButtonHandler} />
            <input type="button" id="btn" value="cancel" style={{marginLeft: "80px"}} onClick={openModalHandler} />
          </form>
          </div>
          </ModalView>
        </ModalBackdrop> : null}
    </>
  );
  };
 
 export default SignUpModal;

