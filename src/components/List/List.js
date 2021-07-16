import React,{useEffect} from 'react'
import './List.css';

function List(props){
    
    function qdisplay(q){
        let ques = document.getElementById('question'+q)
        let asideques = document.getElementsByClassName('q'+q)[0]
        let asideallques = document.querySelectorAll('.ordered-list')
        let allques = document.querySelectorAll('.question')
        let nextbtn = document.getElementsByClassName('nextbtn')[0];
        let prevbtn = document.getElementsByClassName('prevbtn')[0];
        if(asideques.classList[0]=='q9'){
            nextbtn.style.display = 'none'
        }
        else{
            nextbtn.style.display = 'block'

        }
        if(asideques.classList[0]=='q0'){
            prevbtn.style.display = 'none'
        }
        else{
           prevbtn.style.display = 'block'

        }

        for(let i=0;i<allques.length;i++){
            allques[i].style.display ="none"
            asideallques[i].classList.remove('active')
        }
        asideques.classList.add('active')
        ques.style.display = 'block'

    }

    function asidebmchange(index){
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
        <div className="checkflex">
            <i className='fas fa-check qcheck' id={"qcheck"+props.index}></i>
        <div className={`q${props.index} ordered-list `}>
            <i className="far fa-bookmark" id={"asidebookmark"+props.index} onClick={()=>asidebmchange(props.index)}></i>
            <li  onClick={(e)=>qdisplay(props.index,e)}>
                {props.content}
            </li>
        </div>
        </div>
    )

}

export default List