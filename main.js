Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("Camera");

Webcam.attach("#Camera");

function Shutter()
{
    Webcam.snap(function(data_uri){
        document.getElementById("Product").innerHTML = '<img id="iCloud_Photo" src="'+data_uri+'"/>';
    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/7EbaZIjGb/model.json",ModelActivated);

function ModelActivated()
{
    console.log("Model Has Been Loaded/Activated");
}

function Scan()
{
    img = document.getElementById("iCloud_Photo");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results)
        document.getElementById("Object_Results").innerHTML = results[0].label;
        document.getElementById("Object_Results").innerHTML = results[0].confidence.toFixed(2);
    }
}
