// PrivacyRulePage.js
import light from './font/SB-L.ttf';  
import medium from './font/SB-M.ttf'; 
import bold from './font/SB-B.ttf'; 
import styled from 'styled-components';
import screen1 from './images/screen1.png'; 

function PrivacyRulePage(){
    return(
       <DescriptDiv>
        <SubTitle>
            개인정보처리방침
        </SubTitle>
        <Content>
        슈포마켓은 개인정보보호법, 정보통신망 이용촉진 및 정보보호에 관한 법률, 
        통신비밀보호법 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 규정을 준수하며, 
        관련 법령에 의거한 개인정보 처리방침을 정하여 이용자의 권익 보호에 최선을 다하고 있습니다. 
        </Content>
        <Space/>
        <SubTitle>
            개인정보 수집 및 이용 현황
        </SubTitle>
        <Content>
        슈포마켓 에서는 안전하고 바람직한 거래를 위해서 사용자의 개인정보를 아래의 용도로 이용하고 있습니다.
        </Content>
        <Space/>
        <SubsubTitle>
        신원확인
        </SubsubTitle>
        <Content>
        사용자가 포항공과대학교의 학생임을 확인차 인증메일 발송을 위해 사용자의 학교이메일을 사용합니다.  
        </Content>
        <SubsubTitle>
        안전하고 신뢰할수 있는 거래
        </SubsubTitle>
        <Content>
        학생들간 안전하고 신뢰할 수 있는 거래를 위해서 사용자의 이름과 학번을 보관합니다.
        </Content>
        <Content>
        거래 중 사기 또는 법에 저촉되는 행위가 있을 시 수사기관에 협조를 위해 개인정보가 사용될 수 있습니다.
        </Content>
        <Space/>
        <Content>
        ※개인정보는 위의 용도외에는 사용하지 않음을 명시합니다.※
        </Content>
        <Space/>
        <SubTitle>
          개인정보 파기
        </SubTitle>
        <Content>
          이용자의 개인정보는 회원탈퇴 후로 부터 1년안에 안전하게 파기됩니다.
        </Content>
        <Content>
          법에 저촉되는 거래 기록이 있는 경우 부정이용 방지를 위해 5년간 정보가 저장됩니다. 
        </Content>
        <Content>
          거래기록의 경우 거래 관련 분쟁 해결을 위해 최대 5년간 정보가 보존됩니다.
        </Content>
       </DescriptDiv>
    );
}

export default PrivacyRulePage;


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
    padding-left: 25px;
    padding-right: 25px;
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

const SubsubTitle = styled.p`
  color: var(--Black, #262626);
  font-size: 25px;
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
