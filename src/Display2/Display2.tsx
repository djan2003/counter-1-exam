import React, {ChangeEvent, useState} from "react";
import s from "./display2.module.css"
import Button1 from "../components/button/Button";

type PropsType={
    changeCount:any;

}


const Display2=(props:PropsType)=> {
    let [newCount,setNewCount]=useState(0)
    const onChangeHandler=(e:any)=>{
        newCount=e.target.value
        setNewCount(newCount)
    }
    let [maxCount,setMaxCount]=useState(newCount+5)


    const callBackForOnClickHandler=()=>{
        props.changeCount(newCount)
    }

    return (
        <div className={s.display}>
            <input onChange={onChangeHandler}/>
            <input onChange={onChangeHandler}/>
            <Button1 forDisabled={()=>{}} titleForButton={"измени значение"} callBackForOnClick={callBackForOnClickHandler}/>
        </div>
    );
}

export default Display2;
