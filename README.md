# Image Text Reader

This project is a web application that allows users to upload an image and extract text from it using Tesseract.js, an OCR (Optical Character Recognition) library.

## Project Structure

```
image-text-reader
├── public
│   ├── index.html       # HTML structure of the web page
│   ├── index.js         # Main JavaScript file for image processing
│   └── styles.css       # Styles for the web page
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd image-text-reader
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Open `public/index.html` in your web browser.
2. Use the form to upload an image file.
3. The recognized text will be displayed on the page after processing.

## Dependencies

- Tesseract.js: A pure JavaScript OCR library that runs in the browser and Node.js.

## License

This project is licensed under the MIT License.
