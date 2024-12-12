import React from "react";
import drinkGuide1 from '../drinkGuide1.jpg';
import drinkGuide2 from '../drinkGuide2.jpg';

import { Link } from "react-router-dom";
import { AiOutlineFileDone } from "react-icons/ai";

const Menu6 = () => {

    const menu6 = "뒤풀이\n가이드";

    return (
        <div style={{marginBottom:"auto", paddingBottom:'1vh', display:"flex", flexDirection:"column"}}>
            <div className="pageBack">
                <Link to="/" style={{textDecoration:"none", color:"white"}}> 돌아가기 </Link>
            </div>
            <div className="pageTop"><AiOutlineFileDone size={"10%"} />{menu6}</div>
            <div><img src={drinkGuide1} style={{width: "100%", marginTop:"2vh"}}/></div>
            <div><img src={drinkGuide2} style={{width: "100%"}}/></div>
            
        </div>
    )
}

export default Menu6