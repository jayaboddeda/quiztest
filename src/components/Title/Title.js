import React from 'react'
import './Title.css'

class Title extends React.Component{
    render(){
        return (
            <h1>{this.props.title}</h1>
        )
    }
}

export default Title