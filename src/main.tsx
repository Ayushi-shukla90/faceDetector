import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}

import * as faceapi from 'face-api.js';

async function loadModels() {
  const MODEL_URL = '/models';
  await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
  await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
  await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
  await faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL); // Needed for gender detection
}

async function detectGender(input: HTMLImageElement | HTMLVideoElement) {
  const detections = await faceapi
    .detectAllFaces(input, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withAgeAndGender();

  detections.forEach(result => {
    const { gender, genderProbability } = result;
    console.log(`Gender: ${gender}, Probability: ${genderProbability}`);
    // You can display this info on your UI as needed
  });
}
