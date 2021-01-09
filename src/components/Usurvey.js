import React, { Component } from 'react'
var firebase = require('firebase');
var uuid = require('uuid');

const firebaseConfig = {
  apiKey: "AIzaSyCSjbm9-pPF6ideXFCxCedTl2QLH4uTX7A",
  authDomain: "user-survey-534ec.firebaseapp.com",
  databaseURL: "https://user-survey-534ec-default-rtdb.firebaseio.com",
  projectId: "user-survey-534ec",
  storageBucket: "user-survey-534ec.appspot.com",
  messagingSenderId: "113962722992",
  appId: "1:113962722992:web:6ffab41058854cd5bb3d75",
  measurementId: "G-D9LXGJ12W3"
};

export default class Usurvey extends Component {

    nameSubmit = e => {
      e.preventDefault();
      this.setState({studentName: this.name.current.value}, function(){
        console.log(this.state);
      });
    }

    answerSelected = e => {
      var answers = this.state.answers;
      if (e.target.name === 'answer1'){
        answers.answer1 = e.target.value;
      } else if (e.target.name === 'answer2'){
        answers.answer2 = e.target.value;
      } else if (e.target.name === 'answer3'){
        answers.answer3 = e.target.value;
      } else if (e.target.name === 'answer4'){
        answers.answer4 = e.target.value;
      }

      this.setState({answers: answers}, function(){
        console.log(this.state);
      });
    }
    

    questionSubmit(){
      console.log(this.state.studentName);
      firebase.database().ref('uSurvey/' + this.state.uid).set({
        studentName: this.state.studentName,
        answers: this.state.answers
      });
      this.setState({isSubmitted: true});
      
    }

    constructor(props) {
        super(props)
        this.name = React.createRef();
        
        this.state = {
             uid: uuid.v1(),
             studentName: '',
             answers: {
               answer1: '',
               answer2: '',
               answer3: '',
               answer4: ''
             },
             isSubmitted: false
        };
        
        this.nameSubmit = this.nameSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
        this.questionSubmit = this.questionSubmit.bind(this);
    }
    
    render() {
      var studentName;
      var questions;

      if(this.state.studentName === '' && this.state.isSubmitted === false) {
        studentName= <div>
        <h2>Hey student!!
          please enter your Name
        </h2>
        <form onSubmit={this.nameSubmit}>
          <input className="input-name" type="text" placeholder= "Enter your name" ref={this.name}/>
          <button className="input-name">Submit</button>
          </form>
        </div>;
        questions = ''

      } else if(this.state.studentName !=='' && this.state.isSubmitted === false ) {
        studentName = <h1>hey {this.state.studentName}, welcome to Usurvey </h1>
        questions = <div>
          <h2>Please select the options</h2>
          <form onSubmit = {this.questionSubmit}>
            <div className= "card">
              <label>Which company you like most?</label><br/>
              <input type="checkbox" name="answer1" value="BMW" onChange={this.answerSelected}/>BMW
              <input type="checkbox" name="answer2" value="AUDI" onChange={this.answerSelected}/>AUDI
              <input type="checkbox" name="answer3" value="MERCEDES" onChange={this.answerSelected}/>MERCEDES
              <input type="checkbox" name="answer4" value="FORD" onChange={this.answerSelected}/>FORD
            </div>
            <div className= "card">
              <label>How much HP do you prefer in BIKES?</label><br/>
              <input type="checkbox" name="answer1" value="200hp" onChange={this.answerSelected}/>200hp
              <input type="checkbox" name="answer2" value="249hp" onChange={this.answerSelected}/>249hp
              <input type="checkbox" name="answer3" value="180hp" onChange={this.answerSelected}/>180hp
              <input type="checkbox" name="answer4" value="300hp" onChange={this.answerSelected}/>300hp
            </div>
            <div className= "card">
              <label>How much HP do you prefer in CARS?</label><br/>
              <input type="checkbox" name="answer1" value="1000hp" onChange={this.answerSelected}/>1000hp
              <input type="checkbox" name="answer2" value="800hp" onChange={this.answerSelected}/>800hp
              <input type="checkbox" name="answer3" value="950hp" onChange={this.answerSelected}/>950hp
              <input type="checkbox" name="answer4" value="900hp" onChange={this.answerSelected}/>900hp
            </div>
            <div className= "card">
              <label>Which type do you prefer?</label><br/>
              <input type="checkbox" name="answer1" value="Sedan" onChange={this.answerSelected}/>Sedan
              <input type="checkbox" name="answer2" value="Hatchback" onChange={this.answerSelected}/>Hatchback
              <input type="checkbox" name="answer3" value="Convertible" onChange={this.answerSelected}/>Convertible
              <input type="checkbox" name="answer4" value="Luxurious" onChange={this.answerSelected}/>Luxurious
            </div>
            <input className="feedback-button" type="submit" value="submit" />
          </form>
        </div>
      } else if(this.state.studentName !=='' && this.state.isSubmitted === true){
        console.log(this.state.studentName);
        studentName= <h1>  Your response is recorded</h1>;
      }

        return (
            <div>
                {studentName}
                {questions}
            </div>
        )
    }
}
// {this.state.studentName}