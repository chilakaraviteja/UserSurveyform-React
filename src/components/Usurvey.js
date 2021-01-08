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
    constructor(props) {
        super(props)
    
        this.state = {
             uid: uuid.v1(),
             studentName: '',
             answers: {
               answer1: '',
               answer2: '',
               answer3: ''
             },
             isSubmitted: false
        }
    }
    
    render() {
      var studentName;
      var questions;

      if(this.state.studentName === '' && this.state.isSubmitted === false) {
        studentName= <div>
        <h2>Hey student!!
          please enter your Name
        </h2>
        <form>
          <input type="text" placeholder= "please enter your name" ref="name"/>
        </form>
        </div>

      }

        return (
            <div>
                {studentName}

                *********************************
                {questions}
            </div>
        )
    }
}
