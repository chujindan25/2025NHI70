import React from "react";
import selfIntro from '../selfIntro.jpg';
import { Link } from "react-router-dom";
import { AiOutlineTeam } from "react-icons/ai";

//selfIntro
const Menu2 = () => {

    const menu2 = "총정모\n추진단원";

    return (
        <div style={{marginBottom:"auto", paddingBottom:'1vh', display:"flex", flexDirection:"column"}}>
            <div className="pageBack">
                <Link to="/" style={{textDecoration:"none", color:"white"}}> 돌아가기 </Link>
            </div>
            <div className="pageTop"><AiOutlineTeam size={"10%"} />{menu2}</div>
            <div><img src={selfIntro} style={{width: "100%", marginTop:"2vh"}}/></div>
        </div>
    )
}

export default Menu2