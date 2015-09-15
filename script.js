//Question 1
function getLastValue(){
    var data=[1,4,8,5,4,6,54,4,4,8,5,6,4,5,4,5,5];
    var arrayLength=data.length;
    var userValue=prompt("Enter the number")
    var positionData=[]
    if(userValue>=arrayLength){
        alert(data)
    }else{
        var j=0;
        for(var i=arrayLength-1;i>=arrayLength-userValue;i--){
            positionData[j]=data[i];
            j++
        }
        alert(positionData)
    }

}
//Question2
function joinArray(){
    var myColor=["Red","Green","brown"]
    alert('"'+myColor.toString()+'"')
}

//Question 3 . Removing element in array that match 6
function remove_array_element(){
    var array=[1,2,8,6,4,5,4,5,4,8]
    var index=array.indexOf(6)
    if (index > -1) {
        array.splice(index, 1);
    }
    alert(array)
}


//Question 4
function protect_email(){
    var email = prompt("Enter your email: ");
    var length = email.length;
    var j = 0;
    var prin=(length/8)
    for(var i=0;i<prin;i++){
        document.write(email[i])
    }
    for( var i = 5; i<length;i++){
        if(email[i] === '@'){
            for(j=i;j<length;j++){
                document.write(email[j]);
            }
            break;
        }
        document.write("-");
    }
}



//Question 5
function repeat(){
    var text=prompt("Enter the text")
    var num=prompt("How many times you want to repeat");
    num=parseInt(num)+1;
    var joined=new Array(num).join(text)
    alert(joined)

}


//Quesiton 6
function insert(){
    var text=prompt("Enter the text");
    var newText=prompt("Enter the string to be joined");
    var position=parseInt(prompt("Enter the position"));
    var output = [text.slice(0, position), newText, text.slice(position)].join('');
    alert(output)

}

//Question 7
function monthName(){
    var input = prompt("Enter date:(mm/dd/yyyy)");
    var date = new Date(input);
    var month = date.getMonth()+1;
    switch(month){
        case 1:
            document.write("January");
            break;
        case 2:
            document.write("February");
            break;
        case 3:
            document.write("March");
            break;
        case 4:
            document.write("April");
            break;
        case 5:
            document.write("May");
            break;
        case 6:
            document.write("June");
            break;
        case 7:
            document.write("July");
            break;
        case 8:
            document.write("August");
            break;
        case 9:
            document.write("September");
            break;
        case 10:
            document.write("October");
            break;
        case 11:
            document.write("November");
            break;
        case 12:
            document.write("December");
            break;
    }
}



/*8. Write a JavaScript function to calculate 'yesterday day'.*/
function yesterdayDate(){
    var input = prompt("Enter date:(mm/dd/yyyy)");
    var date = new Date(input);
    date.setDate(date.getDate()-1);
    document.write("Yesterday's date was: <strong>"+date+"</strong>");
}

/*9. Write a JavaScript function to check whether a given value is alpha numeric or not.*/
function check(){
    var input = prompt("Enter value: ");
    var patt=/^[a-zA-Z0-9]+$/;
    if(input.match(patt)){
        alert("Valid");
    }
    else{
        alert("Invalid");
    }
}

//Question 10
function firstCharacter(){
    var input = prompt("Enter string: ");
    var patt=/[A-Z]/;
    if(input[0].match(patt)){
        alert("Valid");
    }
    else{
        alert("Invalid");
    }
}

//Question 11
function countVowel() {
    var input = prompt("Enter string: ");
    var count = 0;
    var patt = /[aeiouAEIOU]/;
    for (var i = 0; i < input.length; i++) {
        if (input[i].match(patt)) {
            count++;
        }
    }
    document.write("Number of vowels are: <h1>" + count + "</h1>")
}

