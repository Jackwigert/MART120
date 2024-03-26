function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(255, 182, 193);
    textSize(20)
    text("a drawing of jack", 3,50);

    // head
    fill(243, 207, 198);
    circle(250,100,175);
   
    // eyes
    strokeWeight(10);
    fill(200);
    circle(200,75,20);
    line(270,75,290,75);

    // nose
   triangle(240, 100, 245, 90, 250, 100);
    
    // mouth
    fill(149, 53, 83);  
    circle(245,150,40)
  
    // hair
    fill(145, 114, 12 );
    line(130,175,175,50);
    line(325,50,360,175);
    circle(130,175,30); 
    circle(140,140,30);
    circle(150,110,30);
    circle(360,175,30);
    circle(350,140,30);
    circle(340,110,30);
    fill(186, 29, 9);
    triangle(160, 50, 245, 1, 340, 50);
    // body
    fill(6, 231, 94);
    rect(200,185,100,150);
    
    // decoration
    fill(255);
    point(280,215);
    point(220,215);
    point(250,290);
    
    // right arm
    fill(10, 24, 120);
    line(300,195, 340,250);
    // left arm
    line(200,195,150,250);
    // left leg
    rect(200,335,10,50);
    // right leg
    rect(290,335,10,50);
    
    fill(150);
    textSize(22);
    text("Jack Wigert",200,500 );


}