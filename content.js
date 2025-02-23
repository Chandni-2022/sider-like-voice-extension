// // Create sidebar element  
// const sidebar = document.createElement('div');  
// sidebar.id = 'my-extension-sidebar';  
// sidebar.style.position = 'fixed';  
// sidebar.style.top = '50%';  
// sidebar.style.right = '0';  
// sidebar.style.transform = 'translateY(-50%)';  
// sidebar.style.width = '300px';  
// sidebar.style.height = '400px';  
// sidebar.style.backgroundColor = 'white';  
// sidebar.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';  
// sidebar.style.zIndex = '9999';  
// sidebar.style.display = 'flex';  
// sidebar.style.flexDirection = 'column';  
// sidebar.style.padding = '10px';  
// sidebar.style.border = '1px solid #ccc';  
// sidebar.style.borderRadius = '5px';  
// sidebar.style.display = 'none'; 

 
// const title = document.createElement('h2');  
// title.innerText = 'Voice Commands';  
// sidebar.appendChild(title);  

// const p = document.createElement('p');  
// p.innerText = 'Voice command functionality will be here.';  
// sidebar.appendChild(p);  


// document.body.appendChild(sidebar);  

 
// const icon = document.createElement('div');  
// icon.id = 'your-icon-id';  
// icon.style.position = 'fixed';  
// icon.style.right = '20px';  
// icon.style.top = '20px';  
// icon.style.cursor = 'pointer';  

// const img = document.createElement('img');  
// img.src = 'images/icon.png'; 
// img.alt = "Toggle Sidebar";  
// img.style.width = '50px';  
// img.style.height = '50px';  
// icon.appendChild(img);  
// document.body.appendChild(icon);  

 
// icon.addEventListener('click', () => {  
//     sidebar.style.display = (sidebar.style.display === 'none') ? 'flex' : 'none';  
//     if (sidebar.style.display === 'flex') {  
//         recognition.start();   
//     } else {  
//         recognition.stop(); 
//     }  
// });  

 
// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();  

// recognition.onresult = (event) => {  
//     const transcript = event.results[0][0].transcript;  
//     console.log(transcript);  
// };  


// recognition.onresult = (event) => {  
//     const transcript = event.results[0][0].transcript.toLowerCase(); 
//     console.log(transcript);

//     switch (true) {  
//         case /scroll/i.test(transcript):   
//             window.scrollBy(0, 500); 
//             break;  
//         case /up/i.test(transcript):  
//             window.scrollBy(0, -100); 
//             break;  
//         case /down/i.test(transcript):  
//             window.scrollBy(0, 100); 
//             break;   
//         default:  
//             console.log('Unrecognized command.');  
//             break;  
//     }  
// };





// Create sidebar element  
const sidebar = document.createElement('div');  
sidebar.id = 'my-extension-sidebar';  
sidebar.style.position = 'fixed';  
sidebar.style.top = '50%';  
sidebar.style.right = '0';  
sidebar.style.transform = 'translateY(-50%)';  
sidebar.style.width = '300px';  
sidebar.style.height = '400px';  
sidebar.style.backgroundColor = 'white';  
sidebar.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';  
sidebar.style.zIndex = '9999';  
sidebar.style.display = 'none';  
sidebar.style.flexDirection = 'column';  
sidebar.style.padding = '10px';  
sidebar.style.border = '1px solid #ccc';  
sidebar.style.borderRadius = '5px';  

const title = document.createElement('h2');  
title.innerText = 'Voice Commands';  
sidebar.appendChild(title);  

const p = document.createElement('p');  
p.innerText = 'Voice command functionality will be here.';  
sidebar.appendChild(p);  

document.body.appendChild(sidebar);  

 
const icon = document.createElement('div');  
icon.id = 'your-icon-id';  
icon.style.position = 'fixed';  
icon.style.right = '20px';  
icon.style.top = '20px';  
icon.style.cursor = 'pointer';  

const img = document.createElement('img');  
img.src = 'images/icon.png';   
img.alt = "Toggle Sidebar";  
img.style.width = '50px';  
img.style.height = '50px';  
icon.appendChild(img);  
document.body.appendChild(icon);  

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();  

recognition.onresult = (event) => {  
    const transcript = event.results[0][0].transcript.toLowerCase();  
    console.log(transcript);  

    switch (true) {  
        case /scroll/i.test(transcript):   
            window.scrollBy(0, 500);   
            break;  
        case /up/i.test(transcript):  
            window.scrollBy(0, -100);   
            break;  
        case /down/i.test(transcript):  
            window.scrollBy(0, 100);   
            break;   
        default:  
            console.log('Unrecognized command.');  
            break;  
    }  
};  

 
icon.addEventListener('click', () => {  
   
    sidebar.style.display = (sidebar.style.display === 'none') ? 'flex' : 'none';  
    
    // Start/stop speech recognition based on sidebar visibility  
    if (sidebar.style.display === 'flex') {  
        recognition.start();  
    } else {  
        recognition.stop();  
    }  
});