import React, {useState, useEffect} from 'react'
import { ReactComponent as LoadingIcon } from '../../../Assets/mypage-loading.svg';
import PostTop from './Components/PostTop';
import PostBottom from './Components/PostBottom';
import axios from "axios"

axios.defaults.baseURL = `http://ec2-13-124-229-42.ap-northeast-2.compute.amazonaws.com`;
axios.defaults.withCredentials = true;

const Post = ({match}) => {
  const postId = match.params.id;
  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* data fetch */
  useEffect(async () => {
    await fetchPostData();
    await confirmUserLogin();
  }, []);

  const fetchPostData = async () => {
    const URL = `/post:${postId}`;
    const OPTION = {};

    setIsLoading(true);
    let response = null;
    try {
      response = await axios.get(URL, OPTION);
      setPostData(response.data.data.post);
      setIsLoading(false);
      console.log(`GET ${URL} 요청에 성공했습니다.`);
    } catch(error) {
      response = error.response;
      console.log(`GET ${URL} 요청에 실패했습니다.`);
    } finally {
      console.log(response);
    }
  }

  const confirmUserLogin = async () => {
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
      localStorage.setItem('accessToken', response.data.data.accessToken);
      setIsLoggedIn(true);
      console.log('GET /user/info 요청에 성공했습니다.');
    } catch(error) {
      response = error.response;
      setIsLoggedIn(false);
      console.log('GET /user/info 요청에 실패했습니다.');
    } finally {
      console.log(response);
    }
  };

  useEffect(()=>{
    console.log('postData', postData);
    console.log('commentData', commentData);
    console.log('isLoggedIn', isLoggedIn);
  }, [postData, commentData])

  return (
  <React.Fragment>
    {isLoading ? <LoadingIcon /> : null}
    {!isLoading ?
      <PostTop className="post__container__top" postData={postData}>
      </PostTop>
    : null}
    <PostBottom className="post__container__bottom" isLoggedIn={isLoggedIn} postId={postId}>
    </PostBottom>
  </React.Fragment>
  )
};

export  default Post