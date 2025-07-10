function isLetter(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 65 && code <= 90) || 
    (code >= 97 && code <= 122)   
  );
}

function isDigit(char) {
  const code = char.charCodeAt(0);
  return code >= 48 && code <= 57; 
}

function isValidCode(code) {
  if (code.length !== 7) return false;

  for (let i = 0; i < 3; i++) {
    if (!isLetter(code[i])) return false;
  }

  for (let i = 3; i < 7; i++) {
    if (!isDigit(code[i])) return false;
  }

  return true;
}

function normalizeCode(code) {
  const letters = code.slice(0, 3).toUpperCase();
  const digits = code.slice(3);
  return letters + digits;
}

function processData(data) {
  const totalCodes = data.length;
  const normalizedValidCodes = [];
  let validCodes = 0;

  for (const code of data) {
    if (isValidCode(code)) {
      const normalized = normalizeCode(code);
      normalizedValidCodes.push(normalized);
      validCodes++;
    }
  }

  const invalidCodes = totalCodes - validCodes;

  normalizedValidCodes.sort();

  return {
    totalCodes,
    validCodes,
    invalidCodes,
    normalizedValidCodes
  };
}

module.exports = { processData };
