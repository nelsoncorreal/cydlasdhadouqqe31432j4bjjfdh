// Función para codificar el dato ingresado
function codificar() {
    const inputData = document.getElementById('inputData').value;
    
    // Codificar el dato utilizando un algoritmo de hashing simple
    const hashedData = hash(inputData);
    
    document.getElementById('hashedData').innerText = `Código codificado: ${hashedData}`;
  }
  
  // Función para decodificar el código ingresado
  function descifrar() {
    const inputHashedData = document.getElementById('inputHashedData').value;
    
    // Descifrar el código utilizando un algoritmo de hashing simple
    const originalData = unhash(inputHashedData);
    
    document.getElementById('originalData').innerText = `Código original: ${originalData}`;
  }
  
  // Función simple para codificar el texto
  function hash(text) {
    let hashedText = '';
    for (let i = 0; i < text.length; i++) {
      hashedText += text.charCodeAt(i).toString(16);
    }
    return hashedText;
  }
  
  // Función simple para decodificar el texto
  function unhash(hashedText) {
    let originalText = '';
    for (let i = 0; i < hashedText.length; i += 2) {
      originalText += String.fromCharCode(parseInt(hashedText.substr(i, 2), 16));
    }
    return originalText;
  }
  