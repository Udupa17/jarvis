const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('You can speak now!!!');
}


recognition.onresult = function (event) {
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
}

function read(text) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if (text.includes('time'))
        speech.text = 'It is ' + new Date().getHours() + " " + new Date().getMinutes() + " right now";

    else if (text.includes('my birthday'))
        speech.text = 'Do you think you\'re famous! How the heck would I know your birthday!';

    else if (text.includes('love me'))
        speech.text = 'Of course, not! Go Away!';

    else if (text.includes('who are you'))
        speech.text = ' I am Jarvis! Your Personal assistant ';

    else if (text.includes('rude'))
        speech.text = ' am sorry sir I wont repeat this again ';

    else if (text.includes('accepted'))
        speech.text = ' Thank you very much  Sir! ';

    else if (text.includes('you there'))
        speech.text = ' Yes sir, Always For you!';

    else if (text.includes('hi Jarvis'))
        speech.text = ' Hello Sir, How can I help you!';

    else if (text.includes('thank you'))
        speech.text = ' you are always welcome Sir!';

    else if (text.includes('bye'))
        speech.text = ' GoodBye Sir! Have a great day!';


    else if (text.includes('Google'))
        speech.text = 'opening Google', window.open("https://www.google.com/search");

    else if (text.includes('YouTube'))
        speech.text = 'opening YouTube', window.open("https://www.youtube.com");

    else if (text.includes('weather'))
        speech.text = 'Showing Todays Weather', window.open("https://www.google.com/search?q=todays+weather&oq=todays+weather&aqs=chrome..69i57j0l7.5083j1j7&sourceid=chrome&ie=UTF-8");

    else if (text.includes('Instagram'))
        speech.text = 'opening Instagram', window.open("https://www.instagram.com");

    else if (text.includes('bored'))
        speech.text = 'what do you prefer sir,  instagram or Youtube';



    else if (text.includes('you are so smart'))
        speech.text = 'Much obliged Sir,  I am  smart enough to know that I am not perfect., and thats okay ,I learn new things daily';

    else if (text.includes('search for (search_term)'))
        speech.text = 'searching for', window.open("https://google.com/search?q={search_term}");

    else if (text.includes('date'))
        speech.text = 'Today is {time.toLocaleDateString()}'


    else
        speech.text = 'Sorry sir,i didnt understand';
    window.speechSynthesis.speak(speech);
}