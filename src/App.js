import AppRouter from './Components/Router';
import './App.css';

function App() {


  return (
    <>
      <div className="App">
        <AppRouter />
        <footer id="tail" style={{paddingTop: "1vh"}}>
          <div> &copy; 2024~2025 5급 공채 총정모 추진단 </div>
          <div style={{ width:"100%"}}> 
            <div style={{marginRight:"10px"}}>단장 안재석 📱010-6432-3036</div>
            <div>부단장 안성우 📱010-7655-9128</div>
          </div>
          <div>홈페이지 관리자 박경섭, 문나윤</div>
        </footer>
      </div>
    </>

  );
}

export default App;