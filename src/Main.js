// MainPage.js
import light from './font/SB-L.ttf';  
import medium from './font/SB-M.ttf'; 
import bold from './font/SB-B.ttf'; 
import styled from 'styled-components';
import screen1 from './images/screen1.png';  
import screen2 from './images/screen2.png';  
import screen3 from './images/screen3.png';
import google from './images/playstore.png'; 
import apple from './images/applestore.png'; 
import { NavLink } from 'react-router-dom';

function MainPage(){
    return(
        <DescriptDiv>
            
            <ImageDiv>
                <StyledImage src={screen1}/>
                <StyledImage src={screen2}/>
                <StyledImage src={screen3}/>
            </ImageDiv>
            
            <SubTitle>
                앱 소개
            </SubTitle>
            <Content>
            슈포마켓은 대한민국 포항시의 포항공과대학교 내의 중고거래를 위한 어플입니다.
            </Content>
            <Content>
            학교 구성원들이 가지고 있는 메일을 통해 인증하여 로그인 할 수 있습니다.
            </Content>
            <Content>
            중고 거래를 할 물건을 올리고 또 살 수 있습니다
            </Content>
            <Content>
            판매할 물건의 카테고리를 정하고 설명을 적어 올릴 수 있고, 구매자와 채팅을 통해서 거래를 진행할 수 있습니다.
            </Content>
            <Content>
            자신이 판 물건의 기록을 관리할 수 있고, 자신이 구매한 물건의 기록도 관리할 수 있습니다.
            </Content>
            <Content>
            각 거래에 평점을 매겨 거래 과정에서 비매너적인 행동을 하는 것을 방지할 수 있습니다.
            </Content>
            <Content>
            거래 과정에서 얻은 평점에 따라 개인마다 거래 등급이 변경됩니다.
            </Content>
            <Content>
            어플에 대해 궁금하거나 필요한 것에 대해서 댓글을 남길 수 있습니다.
            </Content>
            <Content>
            판매되는 상품 중 눈여겨 보고 있는 상품이 있다면 찜 기능을 통해서 기록을 저장할 수 있습니다.
            </Content>
            <Content>
            어플을 사용하면서 어렵거나 불편한 점이 있다면 채팅리스트에 내장된 채팅 봇을 통해 질문을 할 수 있습니다.
            </Content>

            <Space/>
            <Space/>

            <SubTitle>
            App introduction
            </SubTitle>
            <Content>
            Supo Market is an application for used goods transactions within Pohang University of Science and Technology in Pohang, Korea.
            </Content>
            <Content>
            School members can log in by authenticating through their email address.
            </Content>
            <Content>
            You can post items for second-hand trading and buy them again.
            </Content>
            <Content>
            You can select a category for the product you want to sell, write a description, and proceed with the transaction through chatting with the buyer.
            </Content>
            <Content>
            You can manage records of the items you have sold, and you can also manage records of the items you have purchased.
            </Content>
            <Content>
            By rating each transaction, you can prevent unethical behavior during the trading process.
            </Content>
            <Content>
            Each individual's trading level changes depending on the rating earned during the trading process.
            </Content>
            <Content>
            You can leave a comment about anything you have questions about or need about the app.
            </Content>
            <Content>
            If there is a product you are interested in among the products being sold, you can save the record using the wish function.
            </Content>
            <Content>
            If you have any difficulties or inconveniences while using the app, you can ask questions through the chat bot built into the chat list.
            </Content>

            <Space/>
            <Space/>

            <SubTitle>
              이용규정
            </SubTitle>
            <Content>
              <StyledNavLink to ={`/rules/trade`}>
              물품규정 바로가기
              </StyledNavLink>
            </Content>
            <Content>
              <StyledNavLink to ={`/rules/privacy`}>
              개인정보처리방침 바로가기
              </StyledNavLink>
            </Content>
            <Content>
              거래규정
            </Content>

            <Space/>
            <Space/>

            <SubTitle>
            다운로드
            </SubTitle>

            <ImageDiv>
              <StyledImage src={google}/> 
              {/* onClick 으로 주소 나오면 해당 링크로 이동시켜줘야함 */}
              <StyledImage src={apple}/>
            </ImageDiv>
        </DescriptDiv>
    );
}

export default MainPage;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  `;

const StyledImage = styled.img`
  max-width: 100%; /* 이미지가 부모 컨테이너의 너비를 넘지 않도록 설정 */
  height: auto; /* 이미지 비율을 유지하도록 설정 */
`;

const ImageDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 30px;
    padding: 30px;
    width: 300px;
`

const Space = styled.div`
    height: 30px;
`;

const DescriptDiv = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 935 px;
    padding-top: 50px;
    padding-left: 50px;
`;


const SubTitle = styled.p`
  color: var(--Black, #262626);
  font-size: 30px;
  font-style: normal;
  font-weight: normal;
  line-height: 0;
  font-family: 'SB-M', sans-serif;
  padding-left: 10px;

  @font-face {
    font-family: 'SB-M';
    src: url(${medium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

const Content = styled.p`
  color: var(--Black, #262626);
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.5;
  font-family: 'SB-L', sans-serif;
  padding-left: 10px;
  text-align: left;

  @font-face {
    font-family: 'SB-L';
    src: url(${light}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
