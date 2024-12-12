import React from "react";
import timetable from '../timetable.jpg';
import { Link } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai";

const Menu1 = () => {

    const menu1 = "총정모\n프로그램";

    return (
        <div style={{marginBottom:"auto", paddingBottom:'1vh', display:"flex", flexDirection:"column"}}>
            <div className="pageBack">
                <Link to="/" style={{textDecoration:"none", color:"white"}}> 돌아가기 </Link>
            </div>
            <div className="pageTop"><AiOutlineAppstore size={"10%"} />{menu1}</div>
            <div><img src={timetable} style={{width: "100%", marginTop:"2vh"}}/></div>
        </div>
    )
}

export default Menu1