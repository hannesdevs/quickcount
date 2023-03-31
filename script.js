const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const readingTime = document.getElementById("readingTime");

textInput.addEventListener("input", () => {
  const text = textInput.value.trim();
  const words = text === "" ? 0 : text.split(/\s+/).length;
  const chars = text.length;
  const minutes = words / 183;
  const seconds = Math.round((minutes % 1) * 60);
  const roundedMinutes = Math.floor(minutes);

  wordCount.textContent = words;
  charCount.textContent = chars;
  readingTime.textContent = `${roundedMinutes} min(s) ${seconds} sec(s)`;
});
