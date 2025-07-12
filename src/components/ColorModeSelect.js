import { MODES } from "../services/colorAPI";

function ColorModeSelect({ onSelect, initialState = {}, className = "" }) {
  const state = {
    mode: MODES.monochrome,
    ...initialState,
  };

  const element = document.createElement("select");
  element.id = "mode-select";
  element.name = "mode";
  element.className = className;

  function render() {
    element.innerHTML = /*html*/ `
        ${Object.entries(MODES)
          .map(([_, value]) => {
            const isSelected = state.mode === value ? "selected" : "";
            return `<option value="${value}" ${isSelected}>${value}</option>`;
          })
          .join("")}
    `;
  }

  function handleChange(e) {
    if (e.target.id === "mode-select") state.mode = e.target.value;
    onSelect?.(state);
  }

  element.addEventListener("change", handleChange);

  render();

  return element;
}

export { ColorModeSelect };
