import React from "react";
import { NavLink } from 'react-router-dom';


function MyPageTop() {
  
  return(
    <>
      <div className='my-wadding'>
        <h1>MY WEDDING</h1>
      </div>
      <div className='my-info'>
        <span><strong>임헌성</strong>님 반갑습니다.</span>
      </div>
      <div className='sub-info'>
        <div className='sub-tab'>
          <ul>
            <li className="mypage1"><NavLink to="/Mypage">내 정보</NavLink></li>
            <li className="mypage2"><NavLink to='/Mypage2'>예약 내역</NavLink></li>\
            <li className="mypage2"><NavLink to='/Mypage3'>청첩장</NavLink></li>
          </ul>
        </div>
      </div>
    </>
    
  )
}


export default MyPageTop;