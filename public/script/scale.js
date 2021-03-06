    var personen_max = 200;
    window.onload = function () {

        var canvas = document.getElementById("skala"),
        
        auslastung = a / personen_max,
        font_size = canvas.width/10,
        c = canvas.getContext("2d");

        //window
        c.fillStyle = "grey";
        c.fillRect(0, 0, canvas.width, canvas.height);

        // Linienfarbe
        c.strokeStyle = "black";
        c.lineWidth = canvas.width / 100;
    
        //Prozentangabe
        c.fillStyle = "grey";
        c.font = font_size +"px Hevetica";
        c.fillText(auslastung*100 + "%", 0.65* canvas.width, 0.525*canvas.height);

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

        // set starting point of drawning
        var posX = 0.4*canvas.width,
            posY = 0.8*canvas.height;
        
        // Set Gradient
        var grd_speed = 1;
        var grd = c.createLinearGradient(0,0,0,300);
        grd.addColorStop(0.4, "red");
        grd.addColorStop(0.95, "yellow");
        grd.addColorStop(1, "green");
       
        setInterval(function() {
            // posY > (0.2*canvas.height + (1-auslastung)*(0.8*canvas.height - 0.2*canvas.height))
            if(posY > (canvas.height*(0.8 - 0.6*auslastung))) {
                if(posY == 0.2*canvas.height){
                    
                } else{

                    // Fill 100 % with gradient scale
                    c.fillStyle = grd;
                    c.fillRect(0.4*canvas.width, 0.2*canvas.height, 0.2*canvas.width,0.6*canvas.height);

                    c.fillStyle = "white";
                    c.fillRect(0.4*canvas.width, 0.2*canvas.height, 0.2*canvas.width, posY - 0.2*canvas.height);
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
            }     
        }, 1);
    };