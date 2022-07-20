import React, {useState} from 'react'
import styled from 'styled-components';
import axios from "axios"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from "react-router-dom"

// banner 공통

const BannerImg = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

// 슬라이드 CSS
const StyledSlider = styled(Slider)`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  border-top: 1px solid #616161;
  .slick-slide div {
    background-color: #fff;
    box-sizing: border-box;
    padding: 30px 20px 70px;
    margin: 0 auto;
  }
  .slick-slide img { // 이미지 부분
    box-sizing: border-box;
    display: inline-block;
    height: 400px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 5px 7px 7px rgba(0, 0, 0, 0.5);
  }
  .slick-dots { // 쩜 부분
    position: absolute;
    left: 0;
    bottom: 20px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
`;

const Banner = ({dummy}) => {
  const [mainImage, setMainImage] = useState([])
  const settings = {
    dots: true,
    infinite: true,  // 무한으로 반복
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,  // 넘어가는 속도
    pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    slidesToShow: 3,  // 1장씩 보이게
    slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    responsive: [
      {  
        breakpoint: 960, //화면 사이즈 960px일 때
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow:3 
        } 
      },
      { 
        breakpoint: 768, //화면 사이즈 768px일 때
        settings: {	
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow:2 
        } 
      }
    ]
  };

const randomList = []
    for(let i = 0; i < 4; i++){
      let random = Math.floor(Math.random() * dummy.length)
      randomList.push(dummy[random])
    }
    let reRandom = randomList.filter((el, i) => randomList.indexOf(el) === i)
    while(reRandom.length === 4){
      if(reRandom.length === 4){
        return setMainImage(reRandom)
      }else{
        let reList = Math.floor(Math.random() * dummy.length)
        reRandom.push(dummy[reList])
      }
    }

    const handleBannerPost = (postId) => {

      axios.get("http://fourmenair/user/post", {
        withCredentials: true
      }).then((res) => {
        if(res.post.postId === postId){
          return axios.get(`http://fourmenair/user/post/{postId}`)
        }
      })
    }

    return (
      <section id="banner">
        <div className="container">
          <BannerImg>
            <div style={{position: "relative"}}>
              {/* <SlideTitle>인기 서비스</SlideTitle> */}
              <StyledSlider {...settings}>
                {mainImage.map((el, i) => {
                  return (
                    <Link to={`/post/${el.id}`}>
                      <img key={i} src={el.url} alt="차박" onClick={() => handleBannerPost(i)} />
                    </Link>
                    )
                  
                })}
              </StyledSlider>
            </div>
          </BannerImg>
        </div>
      </section>
    )
}

export default Banner
