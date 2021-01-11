import React from "react";
import  s from "./button2.module.css"
type PropsTypeB2={
    reset:any
    count:number
    checkButton2:any
}
function Button2(props:PropsTypeB2) {
    return (
        <div>
            <button className={s.button2} disabled={props.checkButton2()} onClick={props.reset}>Обнулить</button>
    </div>
);
}

export default Button2;