import React from 'react';
import { useState } from "react";
import Flashcard from './components/flashcard.js'
import AnswerForm from './components/answer_form.jsx'

import './App.css';


function App() {
  const [cards, setCards] = useState([
    {
      question: "What is an activation record?",
      answer: "An activation record is a stack frame that stores function call information (local variables, return address, etc)."
    },
    {
      question: "When you call a new function in x86-64, what happens to the 16-byte boundary, RBP, RIP, and RSP?",
      answer: "RSP is aligned to a 16-byte boundary, RBP is pushed to save old base, RIP (return address) is pushed, and RSP is adjusted for local storage."
    },
    {
      question: "What are the steps to convert a decimal number to IEEE 754 format?",
      answer: "1) Convert decimal to binary. 2) Normalize to 1.xxxx * 2^n. 3) Determine sign bit. 4) Calculate exponent and bias. 5) Write out sign, exponent, and mantissa bits."
    },
    {
      question: "What are macros in x86-64 assembly?",
      answer: "Macros are preprocessor instructions that let you define code templates that expand at assembly time."
    },
    {
      question: "What is included in the .data section?",
      answer: "The .data section stores initialized global and static variables."
    },
    {
      question: "What is included in the .bss section?",
      answer: "The .bss section contains uninitialized global and static variables."
    },
    {
      question: "What is the declarations section in assembly?",
      answer: "The declarations section is used to declare symbols, functions, or data—often before use or for external linkage."
    },
    {
      question: "What is the .text section for?",
      answer: "The .text section contains the executable instructions (code) of the program."
    },
    {
      question: "To import a C++ function into assembly using 'extern', in which section would you declare it?",
      answer: "In the declarations section, you use 'extern' to declare external functions."
    }
  ]);

  let [history, setHistory] = useState([]);
  let [front, setFront] = useState(true);
  let [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * cards.length));

  function flipping_card(event) {
    // if front is true it will set it to false and if it is false it will set it to true
    setFront(!front);
  }

  function next_button(){
    if (currentIndex < cards.length-1){
      let newIndex = currentIndex + 1;
      //make the current index equal to your new index
      // html will render automatically when index is changed since state changes update automatically render
      setCurrentIndex(newIndex);
    }
    //make it so that whenever new carepicked it starts at the front of card
    setFront(true)
  }

  function prev_button(){
    if (currentIndex > 0){
      let newIndex = currentIndex - 1;
      //make the current index equal to your new index
      // html will render automatically when index is changed since state changes update automatically render
      setCurrentIndex(newIndex);
    }
    //make it so that whenever new carepicked it starts at the front of card
    setFront(true)
  }


  return (
    <div className="App"> 
    
      <div className="overall-title"> 
        <h3> Assembly Flashcards </h3>
      </div>

      <div className="overall-description">
        <p>we have {cards.length} cards on assembly, happy learning.</p>
      </div>

      <div className="flashcard-area" onClick={flipping_card}>
        <Flashcard question={cards[currentIndex].question} answer={cards[currentIndex].answer} front={front} />
      </div>

      <div className='Answer'>
        <AnswerForm answer={cards[currentIndex].answer}/>
      </div>

      <div className="forward-and-back-buttons">
        <button className="next-button" onClick={next_button} disabled={currentIndex === cards.length - 1}> Next </button>
        <button className="prev-button" onClick={prev_button} disabled={currentIndex === 0}> Previous </button>
      </div>

    </div>
  );
}

export default App;
