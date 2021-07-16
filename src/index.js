import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar/Navbar"
import GridContainer from "./components/MainContainer/GridContainer"
import Questions from "./components/question.json"
import './Theme.css'


class App extends React.Component{
    render(){
        return(
            <div>
            <Navbar title="NodeJS Beginner"/>
            <GridContainer Questions={Questions}/>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('app'))
