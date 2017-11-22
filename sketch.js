var capture;
var microphone;
var BlackLodge;
var Bob;
var Curtains;
var FWWM;
var WhiteNoise;


function preload() {
   BlackLodge = loadImage('./assets/blacklodge.jpg');
   Bob = loadImage('./assets/bob.png');
   Curtains = loadImage('./assets/redcurtains.jpg');
   FWWM = loadImage('./assets/fwwm.png');
   WhiteNoise = loadSound('./assets/whitenoise.mp3');
}

function setup() {
   createCanvas(640, 480);

   capture = createCapture(VIDEO);
   capture.size(640, 480);
   capture.hide();
   
   WhiteNoise.loop();
   WhiteNoise.playMode('sustain');
   
   microphone = new p5.AudioIn();
   microphone.start();
   
}

function draw() {
   background(0);
   angleMode(DEGREES);
   var myImage = capture.loadPixels();
   
   var amount = 60;
   for (var i = 0; i < amount; i++) {
      var x = random(640);
      var y = random(480);

      var c = myImage.get(x+random(), y+random());
      var d = brightness(c);
      
      push();
      colorMode(HSB);
      fill(0,0,random(0,255));
      //stroke(255);
      ellipse(x, y, random(1, 5));
      tint(random(),random());
      pop();
      
      }
      
      push();
      translate(width/3,height/3);
      rotate(frameCount*3);
      imageMode(CENTER);
      tint(255,random(10,80));
      image(BlackLodge);
      pop();
      
      var volume = microphone.getLevel();
      console.log(volume);
      
      if (volume >= 0.1) {
         imageMode(CENTER);
         push();
         tint(255,160);
         image(Bob,320,240);
         pop();
         push();
         tint(255,80);
         image(Curtains);
         pop();
      } else {
         imageMode(CENTER);
         image(FWWM, 320, 420);
      }
}