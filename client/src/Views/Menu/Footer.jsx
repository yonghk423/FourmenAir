import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

// footer 공통
const FooterContainer = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
`;

//footer sns
const FooterSNS = styled.div`
  position: absolute;
  right: 17px;
  top: 33px;
  z-index: 1;
`;
const FootetSNSLi = styled.li`
  display: inline-block;
  margin: 0 7px;
  &:hover a {
    color: black;
  }
`;
const FooterA = styled.a`
  position: absolute;
  right: 10px;
  top: 30px;
  font-size: 15px;
  color: #666;
  &:hover {
    color: #666;
  }
`;
const FooterEm = styled.em`
  font-size: 18px;
  font-weight: bold;
  color: #666;
`;

// footer info
const FooterInfo = styled.div`
  padding: 25px 0;
  width: 80%;
  > div {
    position: relative;
  }
`;
const FooterP = styled.p`
  display: inline-block;
  padding-top: 15px;
  margin-right: 15px;
  padding-bottom: 18px;
  font-size: 15px;
  font-weight: bold;
  color: #666;
`;
const FooterInfoUl = styled.ul`
  padding-bottom: 10px;

`;
const FooterInfoLi = styled.li`
  display: inline;
  padding-right: 20px;
  position: relative;
  white-space: nowrap;
  color: #222;
  &::after {
  content: '';
  position: absolute;
  right: 10px;
  top: 5px;
  width: 1px;
  height: 11px;
  background-color: #8f8f8f;
  }
  &:last-child::after {
      width: 0;
      height: 0;
  }
  &:hover a{
      color: #8f8f8f;
  }
`;
const FooterInfoLiA = styled.a`
  color: #222;
`;
const FooterInfoP = styled.p`
  padding-top: 15px;
`;

const Footer = () => {
    return (
        <footer id="footer" style={{backgroundColor: "#f7f7f7"}}>
            <div id="footer_sns">
                <FooterContainer>
                    <FooterSNS>
                        <ul>
                            <FootetSNSLi><a href="#"><FontAwesomeIcon icon={faGithub} size="2x" /></a></FootetSNSLi>
                            <FootetSNSLi><a href="#"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></FootetSNSLi>
                            <FootetSNSLi><a href="#"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></FootetSNSLi>
                            <FootetSNSLi><a href="#"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></FootetSNSLi>
                        </ul>
                        <FooterA>ARS <FooterEm>1544-7070</FooterEm></FooterA>
                    </FooterSNS>
                </FooterContainer>
            </div>
            <div id="footer_info">
                <FooterContainer>
                    <FooterInfo>
                        <div>
                            <FooterP>회사명: Fourmen</FooterP>
                            <FooterP>서비스명: Fourmen Air</FooterP>
                            <FooterInfoUl>
                                <FooterInfoLi><FooterInfoLiA>개인정보</FooterInfoLiA></FooterInfoLi>
                                <FooterInfoLi><FooterInfoLiA>처리방침</FooterInfoLiA></FooterInfoLi>
                                <FooterInfoLi><FooterInfoLiA>이용약관</FooterInfoLiA></FooterInfoLi>
                                <FooterInfoLi><FooterInfoLiA>저작권정책</FooterInfoLiA></FooterInfoLi>
                                <FooterInfoLi><FooterInfoLiA>Q&A</FooterInfoLiA></FooterInfoLi>
                                <FooterInfoLi><FooterInfoLiA>찾아오시는 길</FooterInfoLiA></FooterInfoLi>
                            </FooterInfoUl>
                            <FooterInfoUl>
                                <FooterInfoLi>공동대표</FooterInfoLi>
                                <FooterInfoLi>김용희 <FooterInfoLiA href="https://github.com/yonghk423">GITHUB</FooterInfoLiA></FooterInfoLi>
                                <FooterInfoLi>김범수 <FooterInfoLiA href="https://github.com/improvise0828">GITHUB</FooterInfoLiA></FooterInfoLi>
                                <FooterInfoLi>손건영 <FooterInfoLiA  href="https://github.com/Geonyeong-Son">GITHUB</FooterInfoLiA></FooterInfoLi>
                                <FooterInfoLi>이정훈 <FooterInfoLiA href="https://github.com/otter9459">GITHUB</FooterInfoLiA></FooterInfoLi>
                            </FooterInfoUl>
                            <FooterInfoP>&copy; 2021 by FourmenAir Inc. All right reserved</FooterInfoP>
                        </div>
                    </FooterInfo>
                </FooterContainer>
            </div>
        </footer>
    )
}

export default Footer
