import React, { useState, useEffect } from "react";
import "./ProgressWrapper.css";
import Timeout from "../Timeout/Timeout";
import ProgressBar, { stringToSec,QuestionProgess } from "./Progress";

const getTimeString = (min, sec) => (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec)
// function selectedquestions(){
//     let r = document.querySelectorAll('input[type=radio]:checked')
//     return r.length

// }
export function QuestionProgresWrapper(props){
    return(
        <div className="progress-wrapper">
            <QuestionProgess label="Ques:" currentValue='0' maxValue={props.maxQues}/>
        </div>
    )
}

export default function ProgressWrapper(props) {
    const maxTime = stringToSec(props.maxTime);
    const [time, setTime] = useState({minute:0, second:0});
    useEffect(() => {
        let timer = setInterval (()=> {
            setTime(time => {
                if(time.minute*60+time.second < maxTime){
                    if(time.second + 1 ===60){
                        return{
                            minute: time.minute+1,
                            second: 0
                        }
                    }else{
                        return{
                            ...time,
                            second: time.second + 1
                        }
                    }
                }else return time;
            })
        }, 1000)
        return ()=> {
            clearInterval(timer);
        }
    }, [])

    function isTimeout() {
        if (time.minute * 60 + time.second === maxTime) {
            return <Timeout />
        }
    }

    const currentTimeString = getTimeString(time.minute, time.second);
    return(
        <div className="progress-wrapper">
            <ProgressBar label="Time:" currentValue={currentTimeString} maxValue={props.maxTime}/>
            {isTimeout()}
        </div>
    )
}
 