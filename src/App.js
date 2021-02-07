import React from 'react';
import { HashRouter, Route } from "react-router-dom";
// HashRouter 말고도 다양한 라우터들이 존재한다.
import Home from "./routes/Home";  
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

/* 
라우터 안에 exact={true}를 해주는 이유
-> /about에 들어가면 라우터는 /도 렌더링해주고 /about도 렌더링해준다.
-> 그 결과 컴포넌트가 겹쳐서 보인다.
-> 이때 exact={true} 속성을 넣어주면 정확히 url이 일치할때만 해당 컴포넌트를 렌더링해준다.
*/
 
function App() {
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie/:id" component={Detail} />
  </HashRouter>;
}

export default App; 

