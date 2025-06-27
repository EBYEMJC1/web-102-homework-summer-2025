import React, {Component, useState} from "react";

function AnswerForm(props){

    const [inputValue, setInputValue] = useState("");
    const[feedback, setFeedback] = useState("")

    function onCheckAnswer(event){
        event.preventDefault()
        if (inputValue.trim().toLowerCase() === props.answer.trim().toLowerCase()){
            setFeedback("correct")
        }
        else{
            setFeedback("incorrect")
        }
    }


    function event_handler(event){
        setInputValue(event.target.value);
    }

    return(
        <div>
            <form onSubmit={onCheckAnswer}>
                <label htmlFor="user_input">Guess the answer here: </label>
                <input type="text" id="user_input" className={`textbox_${feedback}`} value={inputValue} onChange={event_handler}></input>

                <button type="submit" className="button submit" onSubmit={onCheckAnswer}>
                Submit Guess
                </button>
            </form>

        </div>
    )
}

export default AnswerForm;