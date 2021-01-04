import React from "react";
import s from "./display.module.css"

type PropsType={
    count:number
}


function Display(props:PropsType) {
    function chancheCount() {
        if(props.count<5){
            return s.display
        }
        if(props.count>=5){
            return s.display2
        }

    }
    return (
        <div className={chancheCount()}>
           <div className={s.number}>{props.count}</div>
        </div>
    );
}

export default Display;
