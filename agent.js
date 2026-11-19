// agent.js

const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "nvidia/nemotron-3.5-super-vl:free";

document.querySelector("#send").addEventListener("click", async () => {
  const key = document.querySelector("#key").value.trim();
  const emotion = document.querySelector("#emotion").value;
  const question = document.querySelector("#question").value;
  const output = document.querySelector("#output");

  const prompt = `
  You are an assistant that can answer quesiton. your job is to tell me whether my sentence has this emotion
  ${emotion}
  and the sentence is;
  ${question} Your response should be at most two sentences`;

  // start here
  let chat_output = await chat(prompt, key);
  output.textContent += "\n" + chat_output;
});

async function chat(prompt, key) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "user", content: prompt }],
      }),
    },
  );

  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message || response.statusText);
  return data.choices[0].message.content;
}
