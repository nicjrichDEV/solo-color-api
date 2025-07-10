function Text({ text, classNames = "" }) {
  const element = document.createElement("p");
  element.className = classNames;

  function render() {
    element.innerText = text;
  }

  render();

  return element;
}

export { Text };
