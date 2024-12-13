import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInsertRowAbove } from "react-icons/ai";

const Seat = () => {

    const seatText = "테이블 자리표";
    const seatText2 = "제 자리가 어디에요?\n자리배치표 이동";
    const seatLink = "https://docs.google.com/spreadsheets/d/1JyFwzUZklwqEsLzmmx6YNY7bFmFDAUcR/edit?usp=sharing&ouid=109100697115716123126&rtpof=true&sd=true"
   
    return (
        <div style={{marginBottom:"auto", paddingBottom:'1vh', display:"flex", flexDirection:"column"}}>
            <div className="pageBack">
                <Link to="/" style={{textDecoration:"none", color:"white"}}> 돌아가기 </Link>
            </div>
            <div className="pageTop"><AiOutlineInsertRowAbove size={"10%"} />{seatText}</div>
            
            <a href={seatLink} className="content4" target="_blank" >{seatText2}</a>   
        </div>
    )
}

export default Seat