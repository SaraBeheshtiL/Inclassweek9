// agent.js

const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'nvidia/nemotron-3.5-super-vl:free';

document.querySelector('#send').addEventListener('click', async () => {
  const key = document.querySelector('#key').value.trim();
  const prompt = document.querySelector('#prompt').value;
  const output = document.querySelector('#output');

  // start here
});
