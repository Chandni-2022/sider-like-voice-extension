// voice.js  

const API_KEY = "1024f0f71c43448eb46f15af2d189610"; // Replace with your actual API key  

export const extractCommand = async (audioBlob) => {  
  // Upload the audio to Assembly.ai  
  const formData = new FormData();  
  formData.append('file', audioBlob);  

 
  try {  
    const uploadResponse = await fetch('https://api.assembly.ai/v2/upload', {  
      method: 'POST',  
      headers: { 'authorization': API_KEY },  
      body: formData  
    });  

    const { upload_url } = await uploadResponse.json();  

    // Request transcription  
    const transcriptResponse = await fetch('https://api.assembly.ai/v2/transcript', {  
      method: 'POST',  
      headers: {  
        'authorization': API_KEY,  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({ audio_url: upload_url })  
    });  

    const transcriptData = await transcriptResponse.json();  
    
    // Polling for the transcription result  
    const getTranscriptionResult = async (id) => {  
      const resultResponse = await fetch(`https://api.assembly.ai/v2/transcript/${id}`, {  
        method: 'GET',  
        headers: { 'authorization': API_KEY }  
      });  
      return await resultResponse.json();  
    };  

    let transcription;  
    do {  
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds  
      transcription = await getTranscriptionResult(transcriptData.id);  
    } while (transcription.status !== 'completed');  

    console.log("Transcription result:", transcription.text);  
    return transcription.text;  
  } catch (error) {  
    console.error("Error extracting command:", error);  
    return ""; // Return empty or handle the error properly  
  }  
}; 