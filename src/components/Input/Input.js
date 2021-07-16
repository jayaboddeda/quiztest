import React, { useState, useEffect } from 'react';
import List from '../List/List';
import './input.css'
import { QuestionProgresWrapper } from '../Progress/ProgressWrapper';


export default function Input(props) {
    useEffect(() => {
        let allcheck = document.querySelectorAll('.check')
        let allasidecheck = document.querySelectorAll('.qcheck')
        for (let i = 0; i < allcheck.length; i++) {
            allcheck[i].style.display = 'none';
        }
        for (let i = 0; i < allasidecheck.length; i++) {
            allasidecheck[i].style.display = 'none';
        }

    })
    function bgchange(radiobtn, li, checkid, index) {
    let r = document.querySelectorAll('input[type=radio]:checked');
     let currentvaluelabel = document.getElementsByClassName('margin-leftquestionlabel')[1]; 
     let progress = document.getElementsByClassName('progress')[1];
     currentvaluelabel.innerHTML = `${r.length}/10`;
     console.log(progress.style.width)
     progress.style.width= `${r.length*10}%`
        

        let listitem = document.getElementsByClassName(li)[0];
        let opt = document.getElementById(radiobtn)
        let allopt = document.querySelectorAll('.radiobtn')
        let checkicon = document.getElementById(checkid)
        let allcheck = document.querySelectorAll('.check')
        let asidecheck = document.getElementById('qcheck'+index)
        let asidequestion = document.getElementsByClassName('q'+index)[0]
        asidecheck.style.display = "block"
        asidequestion.style.opacity = "0.3"
        
        for (let i = 0; i < allopt.length; i++) {
            if (!allopt[i].checked) {
                allopt[i].parentElement.style.backgroundColor = "white"
                allcheck[i].style.display = 'none'


            }

        }

        if (opt.checked) {
            listitem.style.backgroundColor = 'rgb(136, 248, 136)';
            checkicon.style.display = 'block'

        }

    }
    return (
        <li className={`li${props.option + props.index}`}>

            <input type="radio" className="radiobtn" name={'optionselection' + props.index} id={props.option + props.index} value={props.option} onChange={(e) => bgchange(`${props.option + props.index}`, `li${props.option + props.index}`, `check${props.option + props.index}`,`${props.index}`)} />
            <label className={`optlabel optlabel${props.option + props.index}`} htmlFor={props.option + props.index} >
                <span className="optspan">{props.option}</span>
                <i className='fas fa-check check' id={"check" + props.option + props.index}></i>

            </label>

        </li>
    )
}