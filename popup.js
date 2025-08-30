const promptTexts = document.querySelectorAll('.prompt-text');
promptTexts.forEach(promptText => {
    // Create a copy button
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.classList.add('copy-btn');
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(promptText.textContent);
        console.log('Copied to clipboard!', promptText.textContent);
    });

    // Append the copy button to the prompt text
    promptText.appendChild(copyButton);
    promptText.classList.add('prompt-text');
});