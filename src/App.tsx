import React, {useState} from 'react';
import './App.css';
import Display from "./components/display/display";
import Button1 from "./components/button/Button";
import Button2 from "./components/button2/button2";

function App() {
    const [count, setCount] = useState(0)

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
                            plus={plus}
                            count={count}
                        /></div>
                    <div className="forButton">
                        <Button2
                            reset={reset}
                            count={count}
                        /></div>
                </div>
                <div className="block2">
            <Display count={count}/>
            <div className="forButton">
                <Button1
                    plus={plus}
                    count={count}
                /></div>
            <div className="forButton">
                <Button2
                    reset={reset}
                    count={count}
                /></div>
                </div>
            </div>
        </div>
    );
}

export default App;
