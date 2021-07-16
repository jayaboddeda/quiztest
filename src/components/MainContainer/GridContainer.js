import React, { useEffect } from 'react';
import './GridContainer.css'
import List from '../List/List'
import Para from '../Para/Para';
import Input from '../Input/Input';
import {AccentButton,OutlineButton} from '../Button/Button';

function GridContainer(props) {
    function listOfQuestion(Questions) {

        return Questions.map((question, index) =>
            <List key={index + question.question.length} index={index} content={question.question} />
        )
    }
    useEffect(() => {
        let firstli = document.getElementsByClassName('q0')[0];
        if (firstli != undefined) {
            firstli.classList.add("active");
        }

    }, [])


    function listOfOptions(Options, qi) {



        return Options.map((option, index) =>
            // <List key={index + option.length} content={option} />

            <Input option={option} index={qi} />

        )



    }

    function question(Questions) {


        return Questions.map((question, index) => (
            <div className="question" id={"question" + index} >
                <Para index={index} content={question.question} />
                <ol className="options">
                    {listOfOptions(question.options, index)}
                </ol>
            </div>
        ))
    }

    return (
        <section className="grid-container">
            <aside>
                <ol>
                    {listOfQuestion(props.Questions)}
                </ol>
            </aside>
            <div className="question-container">
                <div>
                    {question(props.Questions)}
                </div>
                <div className="buttons">
                <OutlineButton content="Previous"/>
                <AccentButton content="Next"/>
                </div>
            </div>
        </section>
    )
}

export default GridContainer;