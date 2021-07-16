import React from 'react'
import './Navbar.css'
import Title from '../Title/Title'
import SubmitAccentButton,{LinkButton,AccentButton} from '../Button/Button'
import ProgressWrapper,{ QuestionProgresWrapper } from '../Progress/ProgressWrapper'

class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <div>
                <Title title={this.props.title} />
                <LinkButton content="Instructions"/>
                </div>
                <div>
                <ProgressWrapper  maxTime="01:00" />  
                <QuestionProgresWrapper  maxQues="10" />
                </div>
                <div>
                <LinkButton content="Need Help?"/>
                <SubmitAccentButton content = "Submit Test" />
                </div>
            </nav>
        )
    }
}

export default Navbar;



