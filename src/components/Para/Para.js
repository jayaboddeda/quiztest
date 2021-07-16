import React from 'react'
import './para.css'

function Para(props){
    let i = props.index +1
    function bmchange(index){
        let parabookmark = document.getElementById('parabookmark'+index)
        let asidebookmark = document.getElementById('asidebookmark'+index)
        if(parabookmark.style.color =='grey' ||parabookmark.style.color =='' ){
            parabookmark.style.color ='rgb(204, 62, 0)'
            asidebookmark.style.color ='rgb(204, 62, 0)'
        }
        else{
            parabookmark.style.color ='grey'
            asidebookmark.style.color ='grey'
        }
    }
    return(
        <p>
            <span>{i + ". "}</span>
            <i className="far fa-bookmark" id={'parabookmark'+props.index} onClick={()=>bmchange(props.index)} ></i>
            {props.content}
        </p>
    )
}

export default Para