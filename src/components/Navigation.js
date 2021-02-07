import React from 'react';
import { Link } from "react-router-dom";
// html코드인 a href 를 이용하면 새로운 html을 가져오기 때문에 매번 / 페이지만 보여진다.
// react가 SPA 이기 때문이다.
// 이를 위해 Link to 를 사용하자. 

// Link를 쓰고있을때 주의할 점으로 해당 컴포넌트가 Router 안에 위치해야 한다. 

function Navigation() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );  
}

export default Navigation;