chrome.runtime.onInstalled.addListener(() => {
    console.log('Prompt helper extension installed.');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'greet') {
        sendResponse({ reply: 'Hello from prompt helper background.js!' });
    }
});