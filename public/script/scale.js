

window.onload = function () {
    
    var canvas = document.getElementById("skala"),
    auslastung = 1.0,
    number = 50,
    c = canvas.getContext("2d");


    
    
    //window
    //c.fillStyle = "grey";
    //c.fillRect(0, 0, canvas.width, canvas.height);

    // Linienfarbe
    c.strokeStyle = "black";
    c.lineWidth = 5;

   
    
    

   
    
 
    //Prozentangabe
    c.fillStyle = "grey";
    c.font = "40px Hevetica";
    c.fillText(auslastung*100 + "%", 0.65* canvas.width, 0.525*canvas.height);
    c.fillText({number},10,10);

    // set starting point of drawning
    var posX = 0.4*canvas.width,
        posY = 0.8*canvas.height;
    
    // Set Gradient
    var grd_speed = 1;
    var grd = c.createLinearGradient(0,0,0,300);
    grd.addColorStop(0.4, "red");
    grd.addColorStop(0.95, "yellow");
    grd.addColorStop(1, "green");
    c.fillStyle = grd;
    c.fillRect(200, 100, 100,300);
    


    setInterval(function() {
        if(posY > (1 +0.2 - auslastung)*canvas.height) {
            c.fillStyle = grd;
            c.fillRect(0.4*canvas.width, 0.2*canvas.height, 0.2*canvas.width,0.6*canvas.height);

            c.fillStyle = "white";
            c.fillRect(200, 100, 100,posY-100);
            posY -= grd_speed;

            //// Skala"gefäß"
            // Rand
            c.beginPath();
            c.moveTo(0.4*canvas.width, 0.2*canvas.height);
            c.lineTo(0.4*canvas.width, 0.8*canvas.height);
            c.lineTo(0.6*canvas.width, 0.8*canvas.height);
            c.lineTo(0.6*canvas.width, 0.2*canvas.height);
            c.closePath();
            
            //Skala
            c.moveTo(0.4*canvas.width, 0.4*canvas.height);
            c.lineTo(0.425*canvas.width, 0.4*canvas.height);
            c.moveTo(0.575*canvas.width, 0.4*canvas.height);
            c.lineTo(0.6*canvas.width, 0.4*canvas.height);

            c.moveTo(0.4*canvas.width, 0.6*canvas.height);
            c.lineTo(0.425*canvas.width, 0.6*canvas.height);
            c.moveTo(0.575*canvas.width, 0.6*canvas.height);
            c.lineTo(0.6*canvas.width, 0.6*canvas.height);

            c.stroke();
        }
        
       

    }, 1);
 

    
};