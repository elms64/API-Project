import { Component, OnInit } from '@angular/core';

//Defining resources for Chatbot component
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['chatbot.component.css']
})

export class ChatbotComponent implements OnInit {
ngOnInit(): void {
}    

//Declaring variable to store user input for Chatbot
userMessage: string ='';


//Declares method for retrieving chatbot response, passing the user input 
getMessage(userMessage:string) {
  
  //Assign response variable to appropriate HTML element
  var botMessage: string = "";
  botMessage = document.getElementById('botResponse')?.textContent!;

  //Log the user message, for reference to chat history in console
  console.log(userMessage);

  // Defines all parameters for HTTP request using the 'fetch' method, including user input
  const encodedParams = new URLSearchParams();
  encodedParams.append("in", userMessage);
  encodedParams.append("op", "in");
  encodedParams.append("cbot", "1");
  encodedParams.append("SessionID", "RapidAPI1");
  encodedParams.append("cbid", "1");
  encodedParams.append("key", "GETAPIKEYFROMRAPIDAPI");
  encodedParams.append("ChatSource", "RapidAPI");
  encodedParams.append("duration", "1");

// Passing authentication token to authorise API call 
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'GETAPIKEYFROMRAPIDAPI',
		'X-RapidAPI-Host': 'robomatic-ai.p.rapidapi.com'
	},
	body: encodedParams
};

//Retrieve JSON response and display to user in HTML
fetch('https://robomatic-ai.p.rapidapi.com/api', options)
.then(response => response.json())
.then(response => {
  console.log(response);
  botMessage = response.out;
  console.log(botMessage);
  document.getElementById('botResponse')!.innerText = botMessage;
})

//Log errors in console if they occur
.catch(err => {
console.error(err);
});

//Simple method for printing chat history below chat bot interface
const paraBot = document.createElement("p");
const nodeBot = document.createTextNode(botMessage + "  |  " );
paraBot.appendChild(nodeBot);

const elementBot = document.getElementById("div1");
const childBot = document.getElementById("p1");
elementBot!.insertBefore(paraBot,childBot);


const paraUser = document.createElement("p");
const nodeUser = document.createTextNode(userMessage);
paraBot.appendChild(nodeUser);

const elementUser = document.getElementById("div2");
const childUser = document.getElementById("p1");
elementUser!.insertBefore(paraUser,childUser);




  }
}

