chrome.action.onClicked.addListener((tab) => {  
  console.log("Extension icon clicked"); // For debugging  
  chrome.scripting.executeScript({  
      target: { tabId: tab.id },  
      function: toggleSidebar  
  });  
});  

function toggleSidebar() {  
  let sidebar = document.getElementById('chatbot-sidebar');  

  // If the sidebar exists, remove it; otherwise, create it  
  if (sidebar) {  
      sidebar.remove();  
      console.log("Removing sidebar");  
  } else {  
      console.log("Creating sidebar");  
      sidebar = document.createElement('div');  
      sidebar.id = 'chatbot-sidebar';  
      sidebar.style.position = 'fixed';  
      sidebar.style.top = '10%';  
      sidebar.style.right = '0';  
      sidebar.style.width = '300px';  
      sidebar.style.height = '80%';  
      sidebar.style.backgroundColor = '#fff';  
      sidebar.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';  
      sidebar.style.zIndex = '9999';  
      sidebar.style.padding = '10px';  
      sidebar.style.overflowY = 'auto';  

      // Add some content to your sidebar  
      const title = document.createElement('h2');  
      title.innerText = 'Chatbot';  
      sidebar.appendChild(title);  

      const content = document.createElement('p');  
      content.innerText = 'This is where your chatbot functionality will go.';  
      sidebar.appendChild(content);  

      document.body.appendChild(sidebar);  
      console.log("Sidebar added to the DOM");  
  }  
}