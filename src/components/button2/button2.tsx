import React from "react";
import  s from "./button2.module.css"
type PropsTypeB2={
    reset:any
    count:number
}
function Button2(props:PropsTypeB2) {
    function checkButton2() {
        let check2 = props.count;
        if (check2 > 0){
            return false
        }
        if(check2 <1){
            return true
        }
    }

    return (
        <div>
            <button className={s.button2} disabled={checkButton2()} onClick={props.reset}>Обнулить</button>
    </div>
);
}

export default Button2;