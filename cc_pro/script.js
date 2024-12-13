// script.js
const textInput = document.getElementById('textInput');
const fileInput = document.getElementById('fileInput');
const readButton = document.getElementById('readButton');
const stopButton = document.getElementById('stopButton');

let speechSynthesisInstance = window.speechSynthesis;
let utterance = null;

// Function to handle reading text
function readText(text) {
  if (speechSynthesisInstance.speaking) {
    speechSynthesisInstance.cancel(); // Stop ongoing speech
  }

  utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1; // Adjust rate of speech
  utterance.pitch = 1; // Adjust pitch of speech

  speechSynthesisInstance.speak(utterance);
}

// Function to handle file input
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      textInput.value = reader.result;
    };
    reader.readAsText(file);
  }
});

// Event listener for the "Read Aloud" button
readButton.addEventListener('click', () => {
  const text = textInput.value.trim();
  if (text) {
    readText(text);
  } else {
    alert('Please enter or upload text to read aloud!');
  }
});

// Event listener for the "Stop" button
stopButton.addEventListener('click', () => {
  speechSynthesisInstance.cancel();
});

