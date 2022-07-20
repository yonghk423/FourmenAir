import React from "react"
import styled from 'styled-components';

const BORDER_DEV = ``;

const PostTopContainer = styled.div`
border-top: 1px solid #616161;
`;

const PostTopWrapper = styled.div`
  /* 박스 설정 */
  border: ${BORDER_DEV};
  padding: 16px;
  min-height: 500px;
  height: auto;
  width: 1280px;
  margin: 0 auto;
  
  > .post__container__top__profile {
    /* 박스 설정 */
    border: ${BORDER_DEV};
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    position: relative;
    width: 100%;
    height: 100px;
    /* 배경 설정 */
    background-color: #fafafa;

    > .post__container__top__profile__image {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      display: inline-block;
      position: absolute;
      top: 10px;
      left: 30px;
      width: 80px;
      height: 80px;
    }
    > .post__container__top__profile__name {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      display: inline-block;
      position: absolute;
      top: 20px;
      left: 130px;
      width: 160px;
      height: 20px;
      /* 폰트 설정 */
      color: rgba(0, 0, 0, 0.8);
      font-size: 14px;
      font-weight: 800;
      line-height: 20px;
    }
    > .post__container__top__profile__time {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      display: inline-block;
      position: absolute;
      top: 64px;
      left: 130px;
      width: 160px;
      height: 20px;
    }
    > .post__container__top__profile__local {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      display: inline-block;
      position: absolute;
      top: 42px;
      left: 130px;
      width: 160px;
      height: 20px;
      /* 폰트 설정 */
      color: rgba(0, 0, 0, 0.8);
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }
    > .post__container__top__profile__title {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 30px;
      width: 860px;
      height: 80px;
      /* 폰트 설정 */
      font-weight: 800;
      color: #333;
      font-size: 33px;
      line-height: 80px;
    }
    > .post__container__top__profile__title::before {
      content: "";
      position: absolute;
      top: 0;
      left: -55px;
      width: 1px;
      height: 80px;
      background-color: #999;
    }
  }

  > .post__container__top__main {
    /* Grid 설정 */
    display: grid;
    justify-items: center;
    /* 박스 설정 */
    border: ${BORDER_DEV};
    padding: 25px 0px 25px 0px;
    width: 100%;
    min-height: 800px;
    height: auto;

    > .post__container__top__main__image {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      border-radius: 10px;
      margin-bottom: 25px;
      max-width: 95%;
      min-height: 400px;
    }
    > .post__container__top__main__content {
      /* 박스 설정 */
      border: ${BORDER_DEV};
      width: 1140px;
      min-height: 500px;
      /* 폰트 설정 */
      color: rgba(0, 0, 0, 0.8);
      font-size: 25px;
      font-weight: 600;
      line-height: 40px;
    }
  }
`;

const PostTop = ({postData}) => {
  return (
    <PostTopContainer>
    <PostTopWrapper postData={postData}>
      <div className="post__container__top__profile">
        <img className="post__container__top__profile__image" src={postData.postedUserData.image} alt="프로필 사진 100px * 100px"></img>
        <span className="post__container__top__profile__name">{postData.postedUserData.name}</span>
        <span className="post__container__top__profile__time">{postData.createdAt}</span>
        <span className="post__container__top__profile__local">{postData.tags[0].localTag}</span>
        <span className="post__container__top__profile__title">{postData.title}</span>
      </div>
      <div className="post__container__top__main">
        <img className="post__container__top__main__image" src={postData.url} alt="메인 이미지" ></img>
        <div className="post__container__top__main__content">{postData.postcontents}</div>
      </div>
    </PostTopWrapper>
    </PostTopContainer>
  );
}

export default PostTop