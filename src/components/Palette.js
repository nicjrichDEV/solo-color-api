function Palette({ colors = [], className = "" }) {
  const element = document.createElement("div");
  element.className = className;

  function render() {
    element.innerHTML = colors
      .map(
        (color, index) => /* html */ `
        <div class="w-full h-full flex justify-center items-center font-medium" style="background-color: ${color.hex.value}; color: ${color.contrast.value} " data-id=${index}>${color.hex.value}</div>
    `,
      )
      .join("");
  }

  // Copy hex value
  element.addEventListener("click", (e) => {
    if (e.target.dataset.id) {
      setClipboard(colors[e.target.dataset.id].hex.value);
    }
  });

  async function setClipboard(text) {
    await navigator.clipboard.writeText(text);
  }

  element.updateColors = function (newColors) {
    colors = newColors;
    render();
  };

  render();

  return element;
}

export { Palette };
