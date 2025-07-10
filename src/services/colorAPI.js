const URL = "https://www.thecolorapi.com/";
const MODES = {
  monochrome: "monochrome",
  monochromeDark: "monochrome-dark",
  monochromeLight: "monochrome-light",
  analogic: "analogic",
  compliment: "complement",
  analogicComplement: "analogic-complement",
  triad: "triad",
  quad: "quad",
};

async function getColor(hexCode = "fee2e2") {
  try {
    const req = await fetch(`${URL}id?hex=${hexCode}`);

    if (!req.ok) throw new Error(`HTTP error! Status: ${req.status}`);

    const res = await req.json();

    if (!res) throw new Error(`Error ${res}`);

    return res;
  } catch (error) {
    console.error("Error fetching color data:", error.message);

    if (error instanceof TypeError)
      throw new Error("Network Error: Please check your connection");

    if (error.message.includes("HTTP error"))
      throw new Error("Color API is currently unavailable");

    throw error;
  }
}

async function getScheme(
  seedHex = "fee2e2",
  colorCount = 6,
  mode = MODES.monochrome,
) {
  try {
    const req = await fetch(
      `${URL}scheme?hex=${seedHex}&mode=${mode}&count=${colorCount}`,
    );

    if (!req.ok) throw new Error(`HTTP error! Status: ${req.status}`);

    const res = await req.json();

    if (!res) throw new Error(`Error: ${res}`);

    return res;
  } catch {
    console.error("Error fetching color data:", error.message);

    if (error instanceof TypeError)
      throw new Error("Network Error: Please check your connection");

    if (error.message.includes("HTTP error"))
      throw new Error("Color API is currently unavailable");

    throw error;
  }
}

export { getColor, getScheme, MODES };
