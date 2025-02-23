const icon = document.getElementById('your-icon-id');  
const sidebar = document.getElementById('your-sidebar-id');  

icon.addEventListener('click', () => {  
    sidebar.classList.toggle('translate-x-full'); // Toggle sidebar visibility  
});  

// Voice Recognition Setup  
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();  
recognition.onresult = (event) => {  
    const transcript = event.results[0][0].transcript;  
    console.log(transcript); // Process the voice command  
};  

// Optional: Start voice recognition when the sidebar opens  
icon.addEventListener('click', () => {  
    sidebar.classList.toggle('translate-x-full');  
    if (!sidebar.classList.contains('translate-x-full')) {  
        recognition.start(); // Start listening  
    }  
});