// JS EXERCISES

// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let x = "John"
let y = "Doe"
console.log(`${x} <> ${y}`);
// 22) Create an object with properties such name, surname, email
let accountObj = {
    name:String,
    surname:String,
    email:String,
}
// 23) Delete Email from the previously created object
delete accountObj.email
// 24) Create an array with 10 strings in it
let strArr=["Berlin","Roma","Madrid","Lisbon","Vilnius","Kiev","Copenhagen","Paris","Zagreb","Talinn"];
// 25) Print in the console every string in the previous array
for(let str of strArr){
    console.log(str);
}
// 26) Create an array with 100 random numbers in it
let numArr =[]

while(numArr.length<100){
    let randomNumber = Math.floor(Math.random()*99)
    numArr.push(randomNumber)
}
// 27) Wrote a function to get the MAX and the MIN from the previously created array
// I know it is possible to do with math.max/min and es6 spread opperator but just to practise
function maxMin(){
    let max=numArr[0];
    let min=numArr[0];
    for(let i= 0;i<=numArr.length;i++){
        if(numArr[i]>max){
            max = numArr[i]
        }
        if (numArr[i]<min){
            min = numArr[i]
        }
    }
    console.log(`Max value -- ${max}. Min value -- ${min}`);
}
// 28) Create an array of 10 arrays, in which every array has 10 random numbers
function createArrOfArrays(){
 let arrayOfArays=[]
 for(let a=0; a<10;a++){
     arrayOfArays[a] = [];
     for(let b=0; b<10;b++){
        let randomNumber = Math.floor(Math.random()*99)
        arrayOfArays[a].push(randomNumber);
     }
 }   
 console.log(arrayOfArays);
 return arrayOfArays
}

// 29) Create a function that gets 2 arrays and returns the longest one
function compareArrays(arr1,arr2){
    return arr1.length>arr2.length?`This one is longer- ${arr1}`:`This one is longer- ${arr2}`
}
// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
// .reduce(a,b => a+b)
function sumOfArr(arr){
    let sumOfArr = 0
    for(let number of arr){
        sumOfArr+=number
    }
    return sumOfArr
}

function compareSumOfArrayValues(arr1,arr2){
    let sumOfArr1=sumOfArr(arr1)
    let sumOfArr2 =sumOfArr(arr2)

    return `This array has a higher sum of values--${sumOfArr1>sumOfArr2?arr1:arr2}`
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 31) Get element with ID "container" from the page
let container =document.getElementById("container")
// 32) Get every "td" from the page
let tds = document.getElementsByTagName("td")
// 33) Create a cycle that prints the text inside every td of the page
let num = 1;
for(let td of tds){
    td.textText = (num++).toString();
}
// 34) Write a function to change the heading of the page
function changeHeading(){
    let title = window.top.document.title
    title = "This is the new title"
    return title
}
// 35) Write a function to add an extra row to the table
function addExtraRow(){
    let table = document.getElementsByTagName('tbody')[0]
    let row = document.createElement("tr")
    return table.append(row)
}
addExtraRow()
// 36) Write a function to add the class "test" to each row in the table
function addClassToRow(clas){
    let tableRows = document.getElementsByTagName("tr")
    for(let row of tableRows){
        row.classList.add(clas)
    }
}
addClassToRow("test")

// 37) Write a function to add a red background to every link in the page
function addRedBackground(){
    let links = document.getElementsByTagName("a")
    for(let link of links){
        link.href ="https://www.google.com"
        link.target ="_blank"
        link.innerText = "Link to google"
        link.style.backgroundColor = "red"
    }
}
addRedBackground();
// 38) Console log "Page loaded" when the page is correctly loaded
window.onload = function(){
    console.log("Page loaded");
}
// 39) Write a function to add new items to a UL
let uList = document.getElementsByTagName("ul")[0]
let newli = document.createElement("li")
function addItemsToUl(item){
    newli.textContent = item;    
    uList.append(newli)
}
//addItemsToUl("Hello")
// 40) Write a function to empty a list
function emptyList(){

    let lastItem = uList.childNodes.length -1

    lastItem = 0

    // while(uList.childNodes.length >0){
    //     uList.removeChild(uList.childNodes[lastItem])
    //     lastItem--
    // }
}
emptyList()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


