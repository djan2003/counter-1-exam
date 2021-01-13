import React, {useState} from 'react';
import './App.css';
import Display from "./components/display/display";
import Button1 from "./components/button/Button";
import Display2 from "./Display2/Display2";
import {isNumber} from "util";

function App() {

    let titleForButton1 = "plus one"
    let titleForButton2 = "reset"
    let checkButton1 = () => {
        let check = count;
        if (check < 5) {
            return false
        }
        if (check >= 5) {
            return true
        }
        return false
    }
    let checkButton2 = () => {
        let check2 = count;
        if (check2 > 0) {
            return false
        }
        if (check2 < 1) {
            return true
        }
    }
    let [count, setCount] = useState(0)

    function plus() {
        setCount(count + 1)
    }

    function reset() {
        setCount(count * 0)

    }
    return (


        <div className="App">
            <div className="parent">
                <div className="block1">
                    <Display count={count}/>
                    <div className="forButton">
                        <Button1
                            titleForButton="plus one"
                            callBackForOnClick={plus}
                            forDisabled={checkButton1}
                        /></div>
                    <div className="forButton">
                        <Button1
                            titleForButton="reset"
                            callBackForOnClick={reset}
                            forDisabled={checkButton2}
                        />
                    </div>
                </div>
                <div className="block2">
                    <Display2
                        changeCount={setCount}
                    />
                    <div className="forButton">
                        <Button1
                            titleForButton="plus one"
                            callBackForOnClick={plus}
                            forDisabled={checkButton1}
                        /></div>
                </div>
            </div>
        </div>
    );
}

export default App;
