const form = document.getElementById("upload-form");
const fileInput = document.getElementById("image-input");
const resultContainer = document.getElementById("recognized-text");
const button = document.getElementById("submit");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  button.textContent = "Processing...";
  resultContainer.textContent = "Recognizing text, please wait...";
  console.log("Form submitted");
  const file = fileInput.files[0];
  if (!file) {
    alert("Please upload an image.");
    button.textContent = "Upload and Read Text";
    return;
  }
  if (!window.Tesseract) {
    alert("Tesseract.js is not loaded");
    button.textContent = "Upload and Read Text";
    return;
  }
  const worker = Tesseract.createWorker();
  await worker.load();
  await worker.loadLanguage("eng+hin");
  await worker.initialize("eng+hin");

  const {
    data: { text },
  } = await worker.recognize(file);
  resultContainer.textContent = text;
  button.textContent = "Upload and Read Text";
  await worker.terminate();
});
