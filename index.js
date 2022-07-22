//Question 1: write the code to acess element  which is having id as "text".
const element = document.getElementById("text");
console.log("element");

//Question 2: Write the code to access element which is having tag as h1.
const element1 = document.getElementsByTagName("h1")
console.log("element1");

//Question 3: Write code to access element which is having class as Box.

const element2 = document.getElementsByClassName("Box")
console.log("element2");

//Question 4 : <h1>Hello </h1> ;; change th heading from "Hello" to "Hello World " using Dom function.

function changeText(){
const changeText = document.getElementsByTagName("h1")
changeText[0].innerHTML = "Hello World"
}
changeText();

// Question 5 : Create  three card  on Html page arrange them using flex property row or horrizontal direction and also creat button at button named "changeDirection"
//when user click on this button , the cards arrangement should be changed to verticle direction. 

function changeDirection(){
const element4 = document.getElementsByClassName("flexcontainer")
element4[0].style.flexDirection= "column";
}

//Question 6: Whats the differance between  window vs document ?
//Ans Document object represent  a web page that is loaded in the browser by accessing the document object we can access the element the element in the html 
// sytax :
//document.property_Name ;

//window object is topmost object of the dom hiereacy. it represents a browser window or frame that display the contents of the webpage 
// syntax:
//window.property_Name;


//Question 7: "<h1>Hello</h1>"
//Add one style attribute and give text color as red and id attribute and give the value id value as "heading " in the above the given h1 tag using dom function /

const element5 = document.createElement("h1")
element5.innerText ="Hello";
element5.style.color="red";
element5.id="heading";
console.log("element5");

//Question8

function textChange(){
    const element6 = document.getElementsByClassName("textChange")
    element6[0].innerText="Welcome to Elevation acadamy";
}

// Question 9

function Displaytime(){
var date = new Date();
var h = date.getHours();
  var m = date.getMinutes();
var s = date.getSeconds();
var session = "AM";
 time = h + ":" + m + ":" + s + "";
document.getElementById("MyClockDisplay").innerText="Time"
document.getElementById("MyClockDisplay").textContent="Time"

setTimeout(Displaytime,2000);
}
Displaytime();

//Question 10

function prinValue(){
    const element8 = document.querySelector("#year")
    const element9 = element8.value;
    document.querySelector("#printValue").append(element9);
}

//Question 13


function person(){
  var person = document.createElement('person');
  person.setAttribute("method","get");
  person.setAttribute("action","submit");



  var form = document.createElement("input");
  var brr = document.createElement('br');
  form.setAttribute("type","text");
  form.setAttribute("name","Name");
  form.setAttribute("placeholder","name");


  var A = document.createElement("input");
   A.setAttribute('type',"email");
   A.setAttribute('name',"email");
   A.setAttribute('placeholder',"email@prepbyte.com");
   A.setAttribute('pattern',"[a-zA-Z0-9]+@prepbyte.com");


   var p = document.createElement("input");
   p.setAttribute("type","number");
   p.setAttribute("name","phone no:");
   p.setAttribute("placeholder","phone number");
   p.setAttribute("maxlength","12");
   p.setAttribute("patern","[91]{2} [0-9]{10}");




   var B = document.createElement("input");
   B.setAttribute("type","date");
   B.setAttribute("name","DOB");
   B.setAttribute("placeholder","DOB");
   B.setAttribute("min","1995-10-30");



   person.appendChild(form);
   person.appendChild(A);
   person.appendChild(p);
   person.appendChild(B);
   person.appendChild(brr);


  document.getElementsByClassName('form')[0]
  .appendChild(person);

}
person();