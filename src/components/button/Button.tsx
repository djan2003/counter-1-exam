import React from "react";
type PropsTypeB1={
    plus:any
    count:number
}

function Button1(props:PropsTypeB1) {
    function checkButton1() {
        let check = props.count;
        if (check<5){
            return false
        }
        if(check >=5){
            return true
        }
        return false
    }
    return (
        <div>
            <button disabled={checkButton1()} onClick={props.plus}>Добавить 1</button>
        </div>
    );
}

export default Button1;