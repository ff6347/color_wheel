var sat = 100; // this will hold the saturation
var brght = 100; // the brightness
var hue = 0; // the hue
var diam; // thie diameter of the wheel will be set later
var center; // center of the canvas
var bg; // the background color



    $( "#hue" ).slider({
      max:360,
      min:0,
      value: hue,
      slide:function(event, ui){
        hue = ui.value;
        $("#hue-val").text(ui.value);
      }
    });
    $( "#sat" ).slider({
      max:100,
      min:0,
      value:sat,
      slide:function(event, ui){
        sat = ui.value;
        $("#sat-val").text(ui.value);

      }
    });
    $( "#brght" ).slider({
      max:100,
      min:0,
      value:brght,
      slide:function(event, ui){
        brght = ui.value;
        $("#brght-val").text(ui.value);

      }
    });



$("#hue-val").text(hue);
$("#sat-val").text(sat);
$("#brght-val").text(brght);
function setup() {
  var the_canvas = createCanvas(500, 500);
  the_canvas.parent('thesketch');

  diam = width/2 -50; // the size of the wheel

  center = new p5.Vector(width/2, height/2); // center of the canvas

}



function draw() {
  colorMode(HSB, 360, 100, 100, 100); // set to HSB A

  background(360, 0, 100); // draw the bg each frame
   push(); // move everything
  translate(center.x, center.y); // to the center

  // create the wheel in a loop
  for (var i = 0; i < 361; i++) {
    // draw the longer line to see the selected hue
    strokeWeight(1);
    if (i == hue ) {
    stroke(hue, sat, brght); // set color
       // calc x cos/sin takes radians not degrees
      var temp_x = sin(radians(i)) * (diam + 10);// make it a bit longer
      var temp_y = cos(radians(i)) * (diam + 10); // make it a bit longer
      line(0, 0, temp_x, temp_y ); //
    }

    var x = sin(radians(i)) * diam; // calc x cos/sin takes radians not degrees
    var y = cos(radians(i)) * diam; // calc y

    stroke(i, sat, brght, 90);// set color for all lines
    line(0, 0, x, y); // draw the lines
  }
  pop(); // move back

      // console.log(val);
}