import React from 'react'
import './Button.css'

class SubmitAccentButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = () =>{
            alert("Test Submitted")
        }

    }
    render(){
        return (
            <button className="accent-button" onClick={this.handleClick}>{this.props.content}</button>
        )
    }
}

export class AccentButton extends React.Component{
    constructor(props){
        super(props);
        this.nextquestion = ()=>{
            let activequestion = document.getElementsByClassName('active')[0];
            let qindex = activequestion.classList[0];
            let getindex = qindex.split("")
            let index = getindex[1]
            let nextindex = parseInt(index)+1
            let currentmainq = document.getElementById('question'+index)
            let currentasideq = document.getElementsByClassName('q'+index)[0]
            let nextmainq = document.getElementById('question'+nextindex)
            let nextasideq = document.getElementsByClassName('q'+nextindex)[0]
            let btn = document.getElementsByClassName('nextbtn')[0]
            let prevbtn = document.getElementsByClassName('prevbtn')[0]
          
                currentmainq.style.display = 'none'
            currentasideq.classList.remove('active')
            nextmainq.style.display = "block"
            nextasideq.classList.add('active')
            
            if(index==8){
            
                btn.style.display = 'none'
            }
            else {
                console.log('came')
                prevbtn.style.display = 'block'
                
            }

                
           

                }
    }
    render(){
        return (
            <button className="accent-button nextbtn" onClick={this.nextquestion} >{this.props.content}</button>
        )
    }
}

export class OutlineButton extends React.Component{
    constructor(props){
        super(props);
        this.prevquestion = ()=>{
            let activequestion = document.getElementsByClassName('active')[0];
            let qindex = activequestion.classList[0];
            let getindex = qindex.split("")
            let index = getindex[1]
            let previndex = parseInt(index)-1
            let currentmainq = document.getElementById('question'+index)
            let currentasideq = document.getElementsByClassName('q'+index)[0]
            let prevmainq = document.getElementById('question'+previndex)
            let prevasideq = document.getElementsByClassName('q'+previndex)[0]
            let btn = document.getElementsByClassName('prevbtn')[0]
            let nextbtn = document.getElementsByClassName('nextbtn')[0]

            console.log(index)
            console.log(previndex)
                currentmainq.style.display = 'none'
            currentasideq.classList.remove('active')
            prevmainq.style.display = "block"
            prevasideq.classList.add('active')
            
            if(previndex==0){
            
                btn.style.display = 'none'
            }
            else  {
                nextbtn.style.display = 'block'
                
            }

                
           

                }
    }
    render(){
        return (
            <button className="outline-button prevbtn" onClick={this.prevquestion}>{this.props.content}</button>
        )
    }
}

export class LinkButton extends React.Component{
    render(){
        return (
            <button className="link-button">{this.props.content}</button>
        )
    }
}



export default SubmitAccentButton;