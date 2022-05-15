

function setup() { 
    canvas = createCanvas(280, 280); 
    canvas.center();
    Canvas.mousereleases(classifyCanvas); 
    background("white"); 
    synth = window.speechSynthesis;
}

function preload() {

    classifier = ml5.imageClassifier('DoodleNet')
}

function clearCanvas() {
    background("white");
  }
  
  function draw() {
    

     stroke();

         if (mouseIsPressed) {
    line(pmousex, pmousey, mousex, mouseY);
    function classifyCanvas()

     {
    classifier.classify(canvas, gotResult);

    function gotResult(error, results ) 
    { 
        if (error)  console.error(error);
    }

    console.log(results);
     document.getElementById('label).innerHTML = 'Label: ' + results[@].label;
    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%";
    utterThis = new SpeechSynthesisutterance(results[@].label); synth.speak(utterThis);
  