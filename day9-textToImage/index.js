import { HfInference } from '@huggingface/inference';

const dialogModal = document.getElementById('dialog-modal');
const imageContainer = document.getElementById('image-container');
const form = dialogModal.querySelector('form');
const userInput = document.getElementById('user-input');
const loadingMessage = document.getElementById('loading-message'); 
const resetButton = document.getElementById('reset-button');

/** show dialog on load **/
dialogModal.show();

const inference = new HfInference(process.env.HUGGING_KEY);
console.log("inference", inference);

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    loadingMessage.style.display = 'block';

    dialogModal.close();

    const userInputText = userInput.value;

    try {
        const imageData = await inference.textToImage({
            model: 'stabilityai/stable-diffusion-2',
            inputs: userInputText,
            parameters: {
                negative_prompt: 'blurry',
            },
        });

        
        renderImage(imageData);
    } catch (error) {
        console.error('Error generating image:', error);
    } finally {
       
        loadingMessage.style.display = 'none';
    }
});

function renderImage(imageData) {
    const imageUrl = URL.createObjectURL(imageData); 

    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = 'Generated Image';

    imageContainer.innerHTML = '';
    imageContainer.appendChild(imageElement);
}

resetButton.addEventListener('click', () => {
  window.location.reload();
});
