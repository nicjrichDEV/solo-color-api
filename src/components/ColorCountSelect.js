function ColorCountSelect({ onSelect, initialState = {}, className = "" }) {
  const state = {
    count: 6,
    ...initialState,
  };

  const element = document.createElement("select");
  element.id = "count-select";
  element.name = "count";
  element.className = className;

  function render() {
    element.innerHTML = `
        ${Array.from({ length: 12 }, (_, i) => {
          const value = i + 1;
          const isSelected = state.count === value ? "selected" : "";
          return /* html */ `<option value="${value}" ${isSelected}>${value}</option>`;
        }).join("")}
    `;
  }

  function handleChange(e) {
    if (e.target.id === "count-select") state.count = e.target.value;
    onSelect?.(state);
  }

  element.addEventListener("change", handleChange);

  render();

  return element;
}

export { ColorCountSelect };
