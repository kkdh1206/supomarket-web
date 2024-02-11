// TradeRulePage.js
import light from './font/SB-L.ttf';  
import medium from './font/SB-M.ttf'; 
import bold from './font/SB-B.ttf'; 
import styled from 'styled-components';
import screen1 from './images/screen1.png'; 

function TradeRulePage(){
    return(
       <DescriptDiv>
        <SubTitle>
            금지물품
        </SubTitle>
        <Content>
        1. 생명이 있는 동물 
        </Content>
        <Content>
        2. 술, 담배, 약물
        </Content>
        <Content>
        3. 유통기한 경과 식품
        </Content>
        <Content>
        4. 위험물품 ex) 총포, 도검, 화약, 청소년 유해물품 등
        </Content>
        <Content>
        5. 위법 물품 ex) 암표 등
        </Content>
        <Content>
        ※위의 물품규정을 어긴 물품 적발시 계정의 활동이 제한이 될 수 있음을 명시합니다.※
        </Content>
       </DescriptDiv>
    );
}

export default TradeRulePage;


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
