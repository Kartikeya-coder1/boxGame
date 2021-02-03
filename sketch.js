var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var striker;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
     createCanvas(1000,1000);
    //canvas =
    //create 4 different surfaces
    box1 = createSprite(100,700,250,20);
    box2 = createSprite(350,700,250,20);
    box3 = createSprite(600,700,250,20);
    box4 = createSprite(850,700,250,20);
   
    striker = createSprite(50,10,40,40);
    striker.x = Math.round(random(20,750));
    
     striker.velocityY = 5

     striker.shapeColor = color("white")
    box1.shapeColor = color("red")
    box2.shapeColor = color("green")
    box3.shapeColor = color("blue")
    box4.shapeColor = color("purple")

    //create box sprite and give velocity
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite 
   // createEdges;
    music.play();


    //add condition to check if box touching surface and make it box
    
     if(striker.isTouching(box1)
        ){
            striker.shapeColor = color(rgb(225,0,0))
            striker.velocityY = -30 ;
            music.stop();

            if (striker.y >= 30){
                music.stop();
            }
           // striker.x = 500
            //striker.y = 500
        }


        if(striker.isTouching(box1)
        ){music.stop();
        if(striker.y > 0 ){
            music.stop();
           // music.play() = false
        }}

        if(striker.isTouching(box2)
            ){
                striker.shapeColor = color(rgb(0,225,0))
                music.play()
               striker.velocityY =-30
              // striker.x = 500
            //striker.y = 500
            }

            if(striker.isTouching(box3)
                ){
                    striker.shapeColor = color(rgb(0,0,225))
                    music.play()
               striker.velocityY = -30
              //    striker.x = 500
            //striker.y = 500
                }

                if(striker.isTouching(box2)){
                        striker.shapeColor = color("purple")
                        music.play()
                    striker.velocityY = -30
              //    striker.x = 500
            //striker.y = 500
                    }

                    // if(bottomEdges.x - striker.x > bottomEdges.width/2 + striker.width/2
                    //     && bottomEdges.y - striker.y > bottomEdges.height/2 + height.width/2
                    //     ){
                    //         striker.velocityY = -50
                    //     }

                    //     if(leftEdge.x - striker.x > leftEdge.width/2 + striker.width/2
                    //         && leftEdge.y - striker.y > leftEdge.height/2 + height.width/2
                    //         ){
                    //             striker.velocityY = -50
                    //         }

                    //         if(rightEdge.x - striker.x > rightEdge.width/2 + striker.width/2
                    //             && rightEdge.y - striker.y > rightEdge.height/2 + height.width/2
                    //             ){
                    //                 striker.velocityY = -50
                    //             }


                    if(striker.isTouching(box1)
                        ){
                            striker.shapeColor = color(rgb(225,0,0))
                            music.stop();
                            striker.velocityY = -30 ;
                            //striker.x = 500
                            //striker.y = 500
                        }
                
                        if(striker.isTouching(box2)
                            ){
                                striker.shapeColor = color(rgb(0,225,0))
                                music.play()
                               striker.velocityY =-30
                               //striker.x = 500
                                //striker.y = 500
                            }
                
                            if(striker.isTouching(box3)
                                ){
                                    striker.shapeColor = color(rgb(0,0,225))
                                    music.play()
                                striker.velocityY = -30
                               //   striker.x = 500
                            //striker.y = 500
                                }
                
                                if(striker.isTouching(box4)
                                    ){
                                        striker.shapeColor = color("purple")
                                        music.play()
                                    striker.velocityY = -30
                              //    striker.x = 500
                                //striker.y = 500
                                    }

drawSprites();
}
