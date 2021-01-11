import React from "react";
import s from "./button.module.css"
type PropsTypeB1={
    titleForButton:string
    callBackForOnClick:any
    forDisabled:any

}

function Button1(props:PropsTypeB1) {
        return (
            <div>
                <button className={s.button1} disabled={props.forDisabled()} onClick={props.callBackForOnClick}>{props.titleForButton}</button>
            </div>
        );
    }


export default Button1;