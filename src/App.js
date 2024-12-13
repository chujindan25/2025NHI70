

import AppRouter from './Components/Router';
import './App.css';

function App() {


  return (
    <>
      <div className="App">
        <AppRouter />
        <footer id="tail" style={{paddingTop: "1vh"}}>
          <div> &copy; 2023~2024 5급 공채 총정모 추진단 </div>
          <div style={{display:"flex", justifyContent: "flex-start", width:"100%"}}> 
            <div style={{marginRight:"10px"}}>단장 홍윤석 📱010-8472-7249</div>
            <div>부단장 안성우 📱010-7655-9128</div> 
          </div>
          <div>홈페이지 관리자 전재영, 우승연</div>
        </footer>
      </div>
    </>

  );
}

export default App;
