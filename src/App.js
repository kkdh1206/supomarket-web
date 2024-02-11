import './App.css';
import styled from 'styled-components';
import Mainpage from './Main.js';  
import supologo from './images/icon.png';  
import Tenada from './font/Tenada.ttf';  
import { Route, Routes } from 'react-router-dom';
import TradeRulePage from './TradeRule.js';
import PrivacyRulePage from './PrivacyRule.js';

function App() {
  return (
    <div className="App">
      <Head>
        <img src={supologo}/>
        <Title>슈포마켓</Title>
      </Head>
      <Routes>
        <Route path='/' element = {<Mainpage/>}/>
        <Route path='/rules/trade' element = {<TradeRulePage/>}/>
        <Route path='/rules/privacy' element = {<PrivacyRulePage/>}/>
      </Routes>
    </div>
  );
}

export default App;

const Title = styled.p`
  color: var(--Black, #262626);
  font-size: 70px;
  font-style: normal;
  font-weight: 600;
  line-height: 0;
  font-family: 'Tenada', sans-serif;
  padding-left: 10px;

  @font-face {
    font-family: 'Tenada';
    src: url(${Tenada}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

const Head = styled.p`
  display: flex;
  height: 150px;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  align-self: stretch;
  padding: 0px 20px;
`;