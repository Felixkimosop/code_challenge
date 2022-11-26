function calculate(){
   let marks = document.getElementById('marks').value;


if(marks >=79){
    document.getElementById('calc').innerHTML = `Your grade is A`
}
else if(marks >= 60){
    document.getElementById('calc').innerHTML = `Your grade is B`
}
else if( marks >= 49){
    document.getElementById('calc').innerHTML = `Your grade is C`
}
else if (marks >= 40){
    document.getElementById('calc').innerHTML = `Your grade is D`
}
else if(marks>0){
    document.getElementById('calc').innerHTML = `Your grade is E`
}
else{
    document.getElementById('calc').innerHTML = `PLEASE ENTER YOUR MARKS!`
}

}