import { HfInference } from '@huggingface/inference';
import { blobToBase64 } from '/utils';

const hf = new HfInference();
const dialogModal = document.getElementById('dialog-modal');
const loadingIndicator = document.getElementById('loading-indicator');

dialogModal.show();

document.addEventListener('submit', function (e) {
    e.preventDefault();
    const imageDescription = document.getElementById('user-input').value;
    dialogModal.close();
    showLoadingIndicator();
    generateImage(imageDescription);
});

// Event listener for the reset button
document.getElementById('reset-button').addEventListener('click', function () {
    reset();
});

async function generateImage(imageToGenerate) {
    try {
        const response = await hf.textToImage({
            inputs: imageToGenerate,
            model: "stabilityai/stable-diffusion-2",
        });
        const imageUrl = await blobToBase64(response);
        generateAltText(imageUrl);
    } catch (error) {
        console.error("Error generating image:", error);
        hideLoadingIndicator();
    }
}

async function generateAltText(imageUrl) {
    try {
        const inference = new HfInference(process.env.HUGGING_KEY);
        const text = await inference.imageToText({
            data: await (await fetch(imageUrl)).blob(),
            model: "Salesforce/blip-image-captioning-base",
        });
        const altText = text.generated_text;
        renderImage(imageUrl, altText);
        hideLoadingIndicator();
        return altText || "Alt text not available";
    } catch (error) {
        console.error("Error generating alt text:", error);
        hideLoadingIndicator();
        return "Alt text not available";
    }
}

function renderImage(imageUrl, altText) {
    console.log(altText);
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = altText;
    imageContainer.appendChild(image);
}

function showLoadingIndicator() {
    if (loadingIndicator) {
        loadingIndicator.style.display = 'block';
    }
}

function hideLoadingIndicator() {
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
}

function reset() {
    window.location.reload();
}
