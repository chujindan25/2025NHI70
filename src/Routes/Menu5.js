import React from "react";
import Slider from "react-slick";
import p1 from '../pdf/001.jpg';
import p2 from '../pdf/002.jpg';
import { Link } from "react-router-dom";
import { AiOutlineComment } from "react-icons/ai";


/* 선배와의 대화 부록*/
const Menu5 = () => {

    const menu5 = "선배님과의\n대화\n-부록-";

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
        <div style={{marginBottom:"auto", paddingBottom:'1vh', display:"flex", flexDirection:"column"}}>
            <div className="pageBack">
                <Link to="/" style={{textDecoration:"none", color:"white"}}> 돌아가기 </Link>
            </div>
            <div className="pageTop"><AiOutlineComment size={"10%"} />{menu5}</div>

            <div style={{ marginTop: "2vh" }}>
                <Slider {...settings}>
                    <div>
                        <img src={p1} alt="Slide 1" style={{ width: "100%" }} />
                    </div>
                    <div>
                        <img src={p2} alt="Slide 2" style={{ width: "100%" }} />
                    </div>
                </Slider>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <div style={{textDecoration:"none", color:"gray", marginLeft:"2vw", marginRight:"2vw"}}> 1 </div>
                <Link to="/talk2" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 2 </Link>
                <Link to="/talk3" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 3 </Link>
                <Link to="/talk4" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 4 </Link>
                <Link to="/talk5" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 5 </Link>
                <Link to="/talk6" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 6 </Link>
            </div>
        </div>
    )
}

export default Menu5