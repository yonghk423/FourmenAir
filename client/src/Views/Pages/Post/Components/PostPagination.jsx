import React from 'react';
import styled from 'styled-components';

const BORDER_DEV = ``;

const PaginationContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

const PaginationWrapper = styled.ul`
  /* grid 설정 */
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5px;
  align-items: center;
  justify-content: center;
  padding-bottom: 70px;

  /* 박스 설정 */
  border: ${BORDER_DEV};
  width: 100%;

  > li {
    padding-top: 20px;
    padding-right: 20px;  
    > a {
      /* 폰트 설정 */
      font-size: 16px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  > li:last-child{
    padding-right: 0;
  }
`;

const Pagination = ({totalComments, maxCommentsInPage, handleCurrentPage}) => {
  const totalPages = [];
  for (let i = 1; i <= Math.ceil(totalComments / maxCommentsInPage); i++) {
      totalPages.push(i);
  }

  // console.log('totalPages', totalPages);
  return (
    <PaginationContainer>
      <PaginationWrapper>
          {totalPages.map(num => <li><a onClick={() => handleCurrentPage(num)}>{num}</a></li>)}
      </PaginationWrapper>
      </PaginationContainer>
  );
};

export default Pagination