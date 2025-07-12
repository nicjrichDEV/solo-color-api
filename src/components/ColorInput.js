function ColorInput({ onChange, initialState = {}, className = "" }) {
  const state = {
    color: "#fee2e2",
    ...initialState,
  };

  const element = document.createElement("input");
  element.type = "color";
  element.id = "color-input";
  element.value = state.color;
  element.className = className;

  function handleChange(e) {
    if (e.target.id === "color-input") state.color = e.target.value;
    onChange?.(state);
  }

  element.addEventListener("change", handleChange);

  return element;
}

export { ColorInput };
