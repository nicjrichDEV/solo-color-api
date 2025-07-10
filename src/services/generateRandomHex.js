function generateRandomHex() {
  const hexChars = "0123456789abcdef";
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    hex += hexChars[Math.floor(Math.random() * 16)];
  }

  return hex;
}

export { generateRandomHex };
