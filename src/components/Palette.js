function Palette({ colors = [], className = "" }) {
  const element = document.createElement("div");
  element.className = className;

  function render() {
    element.innerHTML = colors
      .map(
        (color) => /* html */ `
        <div class="w-full h-full flex justify-center items-center" style="background-color: ${color.hex.value}">${color.hex.value}</div>
    `,
      )
      .join("");
  }

  element.addEventListener("click", (e) => console.log(e.target));

  element.updateColors = function (newColors) {
    colors = newColors;
    render();
  };

  render();

  return element;
}

export { Palette };
