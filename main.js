speechRecognition = window.webkitSpeechRecognition;
recognition = new speechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (content == 'take my selfie')
    {
        console.log('taking selfie');
        speak();
    }
}

function speak()
{
    synth = window.speechSynthesis;
    speak_data = 'Taking your selfie in 3 seconds';
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
        {
         takeSnapshot();
         save();
        } ,3000);
}

camera = document.getElementById('camera');
Webcam.set({
    width:360,
    height:250,
    image_format: 'jpeg',
    jpeg_quality: 100
});

