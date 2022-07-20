import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from './PostPagination';

const BORDER_DEV = ``;

const PostCommentContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

const PostCommentWrapper = styled.div`
    /* 박스 설정 */
    border: ${BORDER_DEV};
    width: 100%;
    min-height: 300px;
    max-height: 710px;
    /* Grid 설정 */
    display: grid;
    grid-auto-flow: row;
    align-items: center;
    justify-content: center;
    /* 배경 설정 */
    background-color: #fff;

    > div {
      position: relative;
      width: 1280px;
      height: 100px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);

      > .post__container__bottom__comment__profileimage {
        border: ${BORDER_DEV};
        display: inline-block;
        position: absolute;
        top: 10px;
        left: 30px;
        width: 80px;
        height: 80px;
      }

      > .post__container__bottom__comment__text {
        border: ${BORDER_DEV};
        display: inline-block;
        position: absolute;
        top: 15px;
        left: 230px;
        width: 1020px;
        height: 40px;
        font-size: 14px;
        font-weight: 500;
      }

      > .post__container__bottom__comment__id {
        /* 박스 설정 */
        border: ${BORDER_DEV};
        display: inline-block;
        text-align: center;
        position: absolute;
        top: 10px;
        left: 110px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        /* 폰트 설정 */
        font-size: 14px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }

      > .post__container__bottom__comment__time {
        border: ${BORDER_DEV};
        display: inline-block;
        position: absolute;
        bottom: 10px;
        left: 230px;
        width: 300px;
        height: 30px;
        font-size: 14px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.8);
        line-height: 30px;
      }
    }
`;

const PostComments = ({commentData}) => {
  console.log('commentData commentData commentData', commentData);
  const MAX_COMMENT_IN_PAGE = 5;

  /* state 선언부 */
  const [currentPage, setCurrentPage] = useState(1);

  /* index 설정 */
  const indexOfLast = currentPage * MAX_COMMENT_IN_PAGE;
  const indexOfFirst = indexOfLast - MAX_COMMENT_IN_PAGE;
  const currentComments = commentData.slice(indexOfFirst, indexOfLast);
  
  /* 페이지 클릭 이벤트 핸들러 */
  const handleCurrentPage = (num) => {
    // console.log('handleCurrentPage num', num);
    setCurrentPage(num);
  }

  return (
    <PostCommentContainer>
    <PostCommentWrapper className="post__container__bottom__comment">
      {currentComments.map(el =>
        <div>
            <img className="post__container__bottom__comment__profileimage" src={el.writerImage} alt="프로필 사진 80px * 80px"></img>
            <span className="post__container__bottom__comment__text">{el.content}</span>
            <span className="post__container__bottom__comment__id">{el.writer}</span>
            <span className="post__container__bottom__comment__time">{el.createdAt}</span>
        </div>
      )}
    </PostCommentWrapper>
    <Pagination totalComments={commentData.length} maxCommentsInPage={MAX_COMMENT_IN_PAGE} handleCurrentPage={handleCurrentPage}></Pagination>
    </PostCommentContainer>
  );
};

export default PostComments