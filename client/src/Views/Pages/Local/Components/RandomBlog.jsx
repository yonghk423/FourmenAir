import React, {useState} from 'react'
import axios from 'axios';
import styled from "styled-components"
import { Link } from 'react-router-dom';

// Random 공통
const RandomeContainer = styled.div`
position: relative;
width: 1280px;
margin: 0 auto;
`;

const RandomBlogs = styled.div`
  width: 100%;
  padding: 70px 50px 70px 50px;
  box-sizing: border-box;
  > ul {
    background-color: #edeef2;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.4);
  &:last-child{
      padding-right: 0;
  }
  text-align: center;
  }
`;

const RandomBlogsDiv = styled.div`
  padding: 0 0 30px 0;
  > span {
    display: inline-block;
    padding-left: 7px;
    font-size: 25px;
    font-weight: bold;
     cursor: pointer;
  }
`;

const RandomBlogsUlLi = styled.li`
  display: inline-block;
  border: 0;
  width: 29.3333%;
  height: 230px;
  margin: 2%;
  box-sizing: border-box;
  box-shadow: 4px 7px 7px rgba(0,0,0,0.4);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: all 1s ease-in-out;
  backface-visibility: hidden;
  &:hover{
    transform: rotateY(360deg);
    cursor: pointer;
  }

  > h4 {
  position: absolute;
  bottom: 50px;
  left: 15px;
  font-size: 20px;
  font-weight: bold;
  color: #eceff1;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-shadow: 1px 1px #111;
  }

  > p {
  position: absolute;
  bottom: 20px;
  left: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #f5f5f5;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-shadow: 1px 1px #111;
  }

  > img {
    background-size: cover;
    border: 0;
    border-radius: 10px;
  }
`;

const RandomBlog = ({dummy}) => {
const [randomDummy, setRandomDummy] = useState([])

  const handleRandomClick = () => {
    const randomList = []
    for(let i = 0; i < 6; i++){
      let random = Math.floor(Math.random() * dummy.length)
      randomList.push(dummy[random])
    }
    let reRandom = randomList.filter((el, i) => randomList.indexOf(el) === i)
    while(reRandom.length === 6){
      if(reRandom.length === 6){
        return setRandomDummy(reRandom)
      }else{
        let reList = Math.floor(Math.random() * dummy.length)
        reRandom.push(dummy[reList])
      }
    }
  }

  const handleRandomBlogPost = (postId) => {

    axios.get("http://fourmenair/user/post", {
      withCredentials: true
    }).then((res) => {
      if(res.post.postId === postId){
        return axios.get(`http://fourmenair/user/post/{postId}`)
      }
    })
  }

    return (
        <section id="random" style={{backgroundColor: "#fff"}}>
            <RandomeContainer>
                <RandomBlogs>
                  <RandomBlogsDiv>
                    <span onClick={handleRandomClick}>여긴어때?! ( ⁎ ᵕᴗᵕ ⁎ )</span>
                  </RandomBlogsDiv>
                    <ul>
                      {randomDummy.length === 0 ? 
                      (
                        dummy.map((el, i) => {
                          if(el.id < 7){
                          return ( 
                            <Link to={`/post/${el.id}`}>
                              <RandomBlogsUlLi key={i} onClick={() => handleRandomBlogPost(i)}>
                                <h4>{el.title}</h4>
                                <p>{el.postcontents}</p>
                                <img src={el.url} alt="차박" />
                              </RandomBlogsUlLi>
                            </Link>
                            )
                          }
                        })
                      )
                      :
                      (randomDummy.map((el, i) => {
                        return (
                          <Link to={`/post/${el.id}`}>
                            <RandomBlogsUlLi key={i}>
                                <h4>{el.title}</h4>
                                <p>{el.postcontents}</p>
                                <img src={el.url} alt="차박" />
                            </RandomBlogsUlLi>
                          </Link>
                          )
                        })
                      )
                      }
                    </ul>
                </RandomBlogs>
            </RandomeContainer>
        </section>
    )
}

export default RandomBlog
