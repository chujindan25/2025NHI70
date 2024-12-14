import React from "react";
import Slider from "react-slick"; 
import p3 from '../pdf/003.jpg';
import p4 from '../pdf/004.jpg';
import p5 from '../pdf/005.jpg';
import p6 from '../pdf/006.jpg';

import { Link } from "react-router-dom";

const talk2 = () => {
    const settings = {
        dots: false, // 하단 네비게이션 점 표시
        infinite: true, // 무한 반복
        speed: 500, 
        slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
        slidesToScroll: 1, 
        swipe: true, // 스와이프 활성화
        arrows: false, 
    };

    return (
        <div style={{ marginBottom: "auto", paddingBottom: '1vh', display: "flex", flexDirection: "column" }}>
            <div className="pageBack">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}> 돌아가기 </Link>
            </div>
            <div style={{ marginTop: "2vh" }}>
                <Slider {...settings}>
                    <div>
                        <img src={p3} alt="Slide 1" style={{ width: "100%" }} />
                    </div>
                    <div>
                        <img src={p4} alt="Slide 2" style={{ width: "100%" }} />
                    </div>
                    <div>
                        <img src={p5} alt="Slide 3" style={{ width: "100%" }} />
                    </div>
                    <div>
                        <img src={p6} alt="Slide 4" style={{ width: "100%" }} />
                    </div>
                </Slider>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "2vh" }}>
                <Link to="/talk" style={{ textDecoration: "none", color: "white", marginLeft: "2vw", marginRight: "2vw" }}> 1 </Link>
                <div style={{ textDecoration: "none", color: "gray", marginLeft: "2vw", marginRight: "2vw" }}> 2 </div>
                <Link to="/talk3" style={{ textDecoration: "none", color: "white", marginLeft: "2vw", marginRight: "2vw" }}> 3 </Link>
                <Link to="/talk4" style={{ textDecoration: "none", color: "white", marginLeft: "2vw", marginRight: "2vw" }}> 4 </Link>
                <Link to="/talk5" style={{ textDecoration: "none", color: "white", marginLeft: "2vw", marginRight: "2vw" }}> 5 </Link>
                <Link to="/talk6" style={{ textDecoration: "none", color: "white", marginLeft: "2vw", marginRight: "2vw" }}> 6 </Link>
            </div>
        </div>
    );
}

export default talk2;