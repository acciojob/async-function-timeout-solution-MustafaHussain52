// Get references to HTML elements
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputElement = document.getElementById('output');
const btn = document.getElementById('btn');

// Function to display the message after the delay
async function showMessageWithDelay() {
  const text = textInput.value;
  const delay = delayInput.value;

  // Validate user input
  if (!text || !delay) {
    outputElement.textContent = 'Please enter both text and delay.';
    return;
  }

  // Convert delay to milliseconds
  const delayMs = delay * 1000;

  // Wait for the specified delay
  await new Promise((resolve) => setTimeout(resolve, delayMs));

  // Display the message
  outputElement.textContent = text;
}

// Event listener for button click
btn.addEventListener('click', showMessageWithDelay);
