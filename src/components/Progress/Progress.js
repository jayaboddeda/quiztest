import React from "react";
import "./Progress.css";

function Label(props) {
    return (
        <label className={"progress-label "+props.margin +" "+ props.margin+'questionlabel'}>
            {props.children}
        </label>
    )
}

function Bar(props) {
    const progressFactor = props.current / props.total;
    
    const widthStyle = {
        
        width: progressFactor >= 1 ? "100%" : progressFactor * 100 + "%"
    }
    return (
        <div className="progress-bar">
            <div className="progress" style={widthStyle} />
        </div>
    )
} 


export const stringToSec = (time) => parseInt(time.substring(0, 2)) * 60 + parseInt(time.substring(3));

export function QuestionProgess(props){
    const { label, currentValue, maxValue } = props;

    return (
        <div className="flex-container">
            <Label margin="margin-right">
                {label}
            </Label>
            <Bar current={currentValue} total={maxValue} />
            <Label margin="margin-left" >
                0 / {maxValue}
            </Label>
        </div>
    )
}

export default function Progress(props) {
    const { label, currentValue, maxValue } = props;
    return (
        <div className="flex-container">
            <Label margin="margin-right">
                {label}
            </Label>
            <Bar current={stringToSec(currentValue)} total={stringToSec(maxValue)} />
            <Label margin="margin-left">
                {currentValue} / {maxValue}
            </Label>
        </div>
    )
}