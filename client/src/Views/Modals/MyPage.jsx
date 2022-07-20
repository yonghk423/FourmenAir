import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ReactComponent as LoadingIcon } from '../../Assets/mypage-loading.svg';
import Upload from '../../Upload/upload';

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
  cursor: grab;
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
      width: 400px;
      padding: 50px;
      background: rgba(0, 0, 0, 0.8);
      box-sizing: border-box;
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
    }

    > div.box > span {
      position: absolute;
      top: 3px;
      right: 5px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }

    > div.box h1 {
      margin: 0 auto;
      padding-bottom: 15px;
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

    > div.box .inputBox input[type="checkbox"] {
      width: 15px; 
      height: 15px;
      margin-left: -40px;
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

    > div.box .imageBox {
      border: 0;
      top: 0;
      padding: 10px 0 50px 0;
      margin: 0 auto;
      width: 100px;
      height: 100px;

    > label {
        display: block;
        color: #03a9f4;
        pointer-events: none;
        margin-left: -20px;
      }
    > img {
        display: block;
        border: 1px solid black;
        background-color: white;
        margin-top: 5px;
      }
    > input {
        width: 100px;
        height: 100px;
        cursor: pointer;
        position: absolute;
        left: 50px;
        top: 110px;
        opacity: 0;
      }
    }

    > div.box .vaildCheck {
      top: 0;
      > span {
        display: inline-block;
        left: 0;
        color: #fff;
        font-size: 16px;
        transition: all 0.5s ease-out;
      }
      .span1 {
        margin-top: -20px;
        margin-bottom: 15px;
        transition: all 0.5s ease-out;
      }
      .span2 {
        padding-top: -50px;
        margin-bottom: 15px;
        transition: all 0.5s ease-out;
      }
      .span3 {
        margin-top: -20px;
        margin-bottom: 15px;
        transition: all 0.5s ease-out;
      }
      .span4 {
        margin-top: -50px;
        margin-bottom: 15px;
        transition: all 0.5s ease-out;
      }
    }  

    > div.box .submit-result-table {
      top: 0;
      > span {
        margin-bottom: 10px;
        display: none;
        left: 0;
        color: #fff;
        font-size: 16px;
        transition: all 0.5s ease-out;
      }
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
      margin-right: 20%;
      margin-bottom: 20px;
    }

    > div.box input:last-child{
      margin-right: 0;
    }

  > div.box a {   
    color: #fff;
    margin-left: 2%;
  }

`;

 const MyPageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initialValue = {
    email: "",
    name: "",
    mobile: "",
    image: "",
    gender: "",
    password: "",
    passwordCheck: "",
  };
  const [modifiedUserInfo, setModifiedUserInfo] = useState(initialValue);
  const [isPasswordMatched, setIsPasswordMatched] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const [isVaildPassword, setIsVaildPassword] = useState(true);
  const [isVaildMobile, setIsVaildMobile] = useState(true);
  const [isVaildName, setIsVaildName] = useState(true);
  const [submitEnabled, setSubmitEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const submitResultControl = useRef();

  useEffect(() => {
    const initialValue = {
      email: "",
      name: "",
      mobile: "",
      image: "",
      gender: "",
      password: "",
      passwordCheck: "",
    };
    setModifiedUserInfo(initialValue);
  }, [isOpen]);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const resignHandler = async () => {
    const URL = `/user/resign`;
    const TOKEN = localStorage.getItem('accessToken');
  
    let response = null;
    try {
      response = await axios(URL, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
        },
      });
      console.log('DELETE /user/resign 요청에 성공했습니다.');
    } catch(error) {
      response = error.response;
      console.log('DELETE /user/resign 요청에 실패했습니다.');
    } finally {
      // console.log(response);
      // console.log('accessToken before: ', localStorage.getItem('accessToken'));
      if (response.status === 200) {
        localStorage.setItem('accessToken', '');
        submitResultControl.current.style.display = "inline-block";
        setTimeout(() => {
          submitResultControl.current.style.display = "none";
          setTimeout(() => {
            setIsOpen(false);
          }, 200);
        }, 1500);
        window.location.replace("/");
        // console.log('accessToken after: ', localStorage.getItem('accessToken'));
      }
    }
  }

  const inputUserInfoHandler = (e, tag) => {
    const inputValue = e.target.value;
    if (tag === 'name') {
      const newValue = {...modifiedUserInfo, name: inputValue};
      setModifiedUserInfo(newValue);
    } else if (tag === 'mobile') {
      const newValue = {...modifiedUserInfo, mobile: inputValue};
      setModifiedUserInfo(newValue);
    } else if (tag === 'password') {
      const newValue = {...modifiedUserInfo, password: inputValue};
      setModifiedUserInfo(newValue);
    } else if (tag === 'passwordCheck') {
      const newValue = {...modifiedUserInfo, passwordCheck: inputValue};
      setModifiedUserInfo(newValue);
    } else if (tag === 'image') {
      // 소스 코드 테스트
      let img = e.target.files[0];
      Upload(img, (result) => {
        const url = result.url;
        const newValue = {...modifiedUserInfo, image: url};
        setModifiedUserInfo(newValue);
      });
    }
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

  const submitButtonHandler = async (e) => {
    e.preventDefault();
    console.log(isPasswordMatched, isVaildPassword, isVaildName, isVaildMobile)
    setSubmitEnabled(false);
    if (isPasswordMatched && isVaildPassword && isVaildName && isVaildMobile) {
      fetchUserInfo();
    }
    setSubmitEnabled(true);
  }

  const fetchUserInfo = async () => {
    const URL = `/user/edit`;
    const TOKEN = localStorage.getItem('accessToken');
    const PAYLOAD = {
      email: modifiedUserInfo.email,
      name: modifiedUserInfo.name,
      image: modifiedUserInfo.image,
      mobile: modifiedUserInfo.mobile,
      password: modifiedUserInfo.password,
    };

    let response = null;
    try {
      response = await axios(URL, {
        method: 'PATCH',
        data: PAYLOAD,
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
        },
      });
      // console.log('PATCH /user/edit 요청에 성공했습니다.');
      if (response.status === 201) {
        const token = response.data.data.accessToken;
        localStorage.setItem("accessToken", token);
        submitResultControl.current.style.display = "inline-block";
        setTimeout(() => {
          submitResultControl.current.style.display = "none";
          setTimeout(() => {
            setIsOpen(false);
          }, 200);
        }, 2000);
      }
    } catch(error) {
      response = error.response;
      // console.log('PATCH /user/edit 요청에 실패했습니다.');
    } finally {
      // console.log(response);
    }
  };

  useEffect(() => {
    let delay;
    if (delay) clearTimeout(delay);
    delay = setTimeout(() => {
      if (modifiedUserInfo.password === '' && modifiedUserInfo.passwordCheck === '') {
        // console.log('비밀번호 칸이 비어있습니다.');
        setIsPasswordEmpty(true);
      } else {
        // console.log('비밀번호 칸이 비어있지 않습니다.');
        setIsPasswordEmpty(false);
      }

      if (modifiedUserInfo.password === modifiedUserInfo.passwordCheck) {
        // console.log('비밀번호가 일치합니다.');
        setIsPasswordMatched(true);
      } else {
        // console.log('비밀번호가 일치하지 않습니다.');
        setIsPasswordMatched(false);
      }

      if (vaildPasswordCheck(modifiedUserInfo.password)) {
        // console.log('형식에 맞는 비밀번호입니다.')
        setIsVaildPassword(true);
      } else {
        setIsVaildPassword(false);
      }

      if (vaildNameCheck(modifiedUserInfo.name)) {
        // console.log('형식에 맞는 이름입니다.')
        setIsVaildName(true);
      } else {
        setIsVaildName(false);
      }

      if (vaildMobileCheck(modifiedUserInfo.mobile)) {
        // console.log('형식에 맞는 전화번호입니다.')
        setIsVaildMobile(true);
      } else {
        setIsVaildMobile(false);
      }
    }, 1000);
  }, [modifiedUserInfo]);

  useEffect( async () => {
    setIsLoading(true);
    const URL = `/user/info`;
    const TOKEN = localStorage.getItem('accessToken');
  
    let response = null;
    try {
      response = await axios(URL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
        },
      });
      // console.log('GET /user/info 요청에 성공했습니다.');
      // console.log(response);
      if (response.status === 200) {
        const data = response.data.data.userData;
        const token = response.data.data.accessToken;
        const initialValue = {
          email: data.email,
          name: data.name,
          mobile: data.mobile,
          image: data.image,
          gender: data.gender,
          password: "",
          passwordCheck: "",
        };
        localStorage.setItem('accessToken', token);
        setModifiedUserInfo(initialValue);
        setIsLoading(false);
      }
    } catch(error) {
      response = error.response;
      // console.log('GET /user/info 요청에 실패했습니다.');
    } finally {
      // console.log(response);
    }
  }, [isOpen]);

  return (
    <>
      <ModalBtn onClick={openModalHandler}>
        {isOpen === false ? 'My Page' : 'My Page'}
      </ModalBtn>
      {isOpen === true ? <ModalBackdrop>
        <ModalView>
        <div className='box'>
        <span onClick={openModalHandler} className='close-btn'>&times;</span>
        <h1 align="center">My Page</h1>
        {!isLoading ?
        <form onSubmit={submitButtonHandler}>
          <div class="imageBox">
            <label>profile image</label>
            <img src={modifiedUserInfo.image} alt="이미지 100px*100px"></img>
            <input type="file" onChange={(e) => inputUserInfoHandler(e, 'image')} accept="image/*"></input>
          </div>

          <div class="inputBox">
            <input type="text" name="email" autocomplete="off" value={modifiedUserInfo.email} readonly required />
            <label>email</label>
          </div>
          <div class="inputBox">
            <input type="text" name="text" autocomplete="off"  defaultValue={modifiedUserInfo.name} onChange={(e) => inputUserInfoHandler(e, 'name')} required />
            <label>Name</label>
          </div>

          <div class="vaildCheck">
          {!isVaildName ? <span className="span1">닉네임은 2자 ~ 10자, 영문, 한글, 숫자, 띄어쓰기만 가능합니다.</span> : null}
          </div>

          <div class="inputBox">
            <input type="password" name="password" onChange={(e) => inputUserInfoHandler(e, 'password')} autocomplete="off" required />
            <label>Password</label>
          </div> 
          
          <div class="inputBox">
            <input type="password" name="passwordCheck" onChange={(e) => inputUserInfoHandler(e, 'passwordCheck')} autocomplete="off" required />
            <label>Password Confirm</label>
          </div> 

          <div class="vaildCheck">
            {!isPasswordEmpty && !isPasswordMatched ? <span className="span2">비밀번호가 일치하지 않습니다.</span> : null}
            {!isVaildPassword && isPasswordMatched ? <span className="span3">비밀번호는 4자 이상 15자 이하로 영문, 한글, 숫자만 가능합니다.</span> : null}
          </div>

          <div class="inputBox">
            <input type="tel" name="tel" autocomplete="off" defaultValue={modifiedUserInfo.mobile} onChange={(e) => inputUserInfoHandler(e, 'mobile')} required />
            <label>Phone Number</label>
          </div>  
          
          <div class="vaildCheck">
            {!isVaildMobile ? <span className="span4">휴대폰 번호가 형식에 맞지 않습니다.</span> : null}
          </div>

          <div class="inputBox" style={{margin: "10px 0"}}>
            <input type="checkbox" id='scales' style={{marginLeft: "-100px", marginBottom: "50px"}} name="scales" autocomplete="off" checked readonly required />
            <label>{modifiedUserInfo.gender}</label>
          </div> 
          
          <div class="submit-result-table">
            <span ref={submitResultControl}>회원정보가 수정되었습니다.</span>
          </div>

          <input type="submit" name="login" value="OK" disabled={!submitEnabled}></input>
          <input type="button" id="btn" value="resign" style={{textTransform: "uppercase"}} onClick={resignHandler} />
        </form>
        : <LoadingIcon height="100%" width="100%" />}
        </div>
        </ModalView>
      </ModalBackdrop> : null}
    </>
  );
};
 
export default MyPageModal;