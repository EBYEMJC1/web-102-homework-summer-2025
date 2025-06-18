import React from "react"

function Flashcard(props){
    function front_or_back(){
        if (props.front){
            return props.question
        }
        else {
            return props.answer
        }
    }
    return(
        <div>
            <p>
                {front_or_back()}
            </p>
        </div>
    )
}

export default Flashcard