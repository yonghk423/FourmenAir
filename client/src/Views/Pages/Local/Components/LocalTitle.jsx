import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import {Link} from "react-router-dom"

// localtitle 공통
const LocalTitleContainer = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
`;

// local
const Local = styled.div`
  width: 100%;
  padding: 70px 50px 0 50px;
  box-sizing: border-box;
`;
const LocalDiv = styled.div`
  padding: 15px 0 15px 10px;
  border-bottom: 2px solid #616161;
  > span {
    padding-left: 7px;
    font-size: 25px;
    font-weight: bold;
  }
`;
const LocalDivButton = styled.button`
  display: inline-block;
  margin-top: 5px;
  padding: 10px 45px;
  margin-right: 1.5%;
  font-size: 15px;
  font-weight: bold;
  border: 1px solid #616161;
  border-radius: 6px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  &:last-child{
      margin-right: 0;
  }
  &:hover {
      color: #fff;
      background-color: #13294b;
      box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.1);
      cursor: pointer;
  }
`;

// local Image
const LocalImg = styled.div`
  padding: 35px 50px 70px 50px;
  height: 300px;
`;
const LocalImgUl = styled.ul`
  background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
  &:last-child{
      padding-right: 0;
  }
  box-sizing: border-box;
`;
const LocalImgUlLi = styled.li`
  display: inline-block;
  border: 1px solid #fff;
  width: 29.3333%;
  height: 230px;
  margin: 2%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  opacity: 0.5;
  transition: all 0.6s 0.2s ease;
  transform: translateX(50px);
  &:first-child{
    margin-left: 0;
  }
  &:hover{
    opacity: 1;
    transform: translateX(0px);
    cursor: pointer;
  }
`;
const LocalImgUlLiH4 = styled.h4`
  position: absolute;
  bottom: 50px;
  left: 15px;
  font-size: 20px;
  color: #eceff1;
  text-shadow: 1px 1px #111;
  font-weight: bold;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const LocalImgUlLiP = styled.p`
  position: absolute;
  bottom: 20px;
  left: 15px;
  font-size: 16px;
  color: #f5f5f5;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-shadow: 1px 1px #111;
`;
const LocalImgUlLiImg = styled.img`
  background-size: cover;
  border: 0;
  border-radius: 10px;
`;

const LocalTitle = ({dummy}) => {
  const [selectLocal, setSelectLocal] = useState('서울')
  const [selectBlog, setSelectBlog] = useState([])
  
  const setBlog = dummy.filter((el) => el.data.local === "서울")
  
  // local 빼오는 작업
  const filteredLocal = dummy.map((el) => el.data.local)
  const localAll = filteredLocal.filter((ele, i) => {
    return filteredLocal.indexOf(ele) === i
  })

  const handleClick = (e) => {
    // span에 있는 local 변경 작업
    setSelectLocal(e)

    // blog 빼오는 작업
    const filteredBlog = dummy.filter((el) => el.data.local === e)
    setSelectBlog(filteredBlog)
  }

  const handleLocalTitlePost = (postId) => {
    axios.get("http://fourmenair/user/post", {
      withCredentials: true
    }).then((res) => {
      if(res.post.postId === postId){
        return axios.get(`http://fourmenair/user/post/{postId}`)
      }
    })
  }
    return (
        <section id="lacal-title" style={{backgroundColor: "#edeef2"}}>
            <LocalTitleContainer>
                <Local>
                  <LocalDiv>
                    <span>{selectLocal}</span>
                  </LocalDiv>
                    <div style={{textAlign: "center", paddingTop: "15px"}}>
                      {localAll.map((el, i) => {
                        return <LocalDivButton key={i} onClick={() => handleClick(el)}>{el}</LocalDivButton>
                      })}
                    </div>
                </Local>
                <LocalImg>
                    <LocalImgUl>
                          {selectBlog.length === 0 ? 
                          (
                            setBlog.map((el, i) => {
                              return ( 
                              <>
                              <Link to={`post/${el.id}`}>
                                <LocalImgUlLi onClick={() => handleLocalTitlePost(i)}>
                                  <LocalImgUlLiImg key={i} src={el.url} alt="" />
                                  <LocalImgUlLiH4  key={i} >{el.title}</LocalImgUlLiH4>
                                  <LocalImgUlLiP  key={i} >{el.postcontents}</LocalImgUlLiP>
                                </LocalImgUlLi>
                              </Link>  
                            </>
                              )
                          })
                          )
                           : 
                          (
                            selectBlog.map((el, i) => {
                              return ( 
                              <>
                              <Link to={`post/${el.id}`}>
                                <LocalImgUlLi>
                                  <LocalImgUlLiImg key={i} src={el.url} alt="" />
                                  <LocalImgUlLiH4  key={i} >{el.title}</LocalImgUlLiH4>
                                  <LocalImgUlLiP  key={i} >{el.postcontents}</LocalImgUlLiP>
                                </LocalImgUlLi>
                              </Link>
                              </>
                            )
                          })
                          )
                          }
                    </LocalImgUl>
                </LocalImg>
            </LocalTitleContainer>
        </section>
    )
}

export default LocalTitle
