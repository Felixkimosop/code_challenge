function calculate(){
    let speed = document.getElementById("speed").value;

    // if user enters speed less than 0
    
    if(speed < 0){
        document.getElementById('metre').innerHTML= "Enter Valid Speed"
    }

    else if(speed >= 0 && speed  <= 70){
        document.getElementById('metre').innerHTML= "Your speed is okay"
    }
    else if(speed >= 80 && speed < 90){
    
       document.getElementById('metre').innerHTML= "You have exceeded the required speed limit, Added 2 points"
    }
    
    else if(speed >=90 && speed < 100){
        document.getElementById('metre').innerHTML= "You have exceeded the required speed limit, Added 4 points"
    }
    else if (speed >=100 && speed < 110){
        document.getElementById('metre').innerHTML= "You have exceeded the required speed limit, Added 6 points"
    }
    else if (speed >= 110 && speed < 120){
        document.getElementById('metre').innerHTML= "You have exceeded the required speed limit, Added 8 points"
    }
    else if (speed >= 120 && speed < 130){
        document.getElementById('metre').innerHTML= "You have exceeded the required speed limit, Added 10 points"
    }
    else if (speed >= 130){
        document.getElementById('metre').innerHTML= "LICENSE SUSPENDED!"
    }
    // if left blank
    else {
        document.getElementById('metre').innerHTML = "Enter speed"
    }
}