function Palette({ colors = [], className = "" }) {
  const element = document.createElement("div");
  element.className = className;

  function render() {
    element.innerHTML = colors
      .map(
        (color) => /* html */ `
        <div>${color.hex.value}</div>
    `,
      )
      .join("");
  }

  element.updateColors = function (newColors) {
    colors = newColors;
    render();
  };

  render();

  return element;
}

export { Palette };
