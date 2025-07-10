import { MODES } from "../services/colorAPI";

function Controls({ onGenerate, initialState = {}, className = "" }) {
  const state = {
    color: "#fee2e2",
    count: 6,
    mode: MODES.monochrome,
    ...initialState,
  };

  const element = document.createElement("div");
  element.className = className;

  function render() {
    element.innerHTML = /* html */ `
            <div class="flex gap-2">
                <input type="color" id="color-input" value=${state.color} />
                <select name="count" id="count-select" class="p-2 rounded-lg border border-neutral-300">
                    ${Array.from({ length: 12 }, (_, i) => {
                      const value = i + 1;
                      const isSelected =
                        state.count === value ? "selected" : "";
                      return /* html */ `<option value="${value}" ${isSelected}>${value}</option>`;
                    }).join("")}
                </select>
                <select name="mode" id="mode-select" class="p-2 rounded-lg border border-neutral-300">
                    ${Object.entries(MODES)
                      .map(([_, value]) => {
                        const isSelected =
                          state.mode === value ? "selected" : "";
                        return `<option value="${value}" ${isSelected}>${value}</option>`;
                      })
                      .join("")}
                </select>
            </div>
            <button id="generateBtn" class="bg-violet-600 w-full rounded-lg text-white font-bold h-10 tracking-tighter">Generate Palette</button>
        `;
  }

  // Handle change if value of color input or either select changes
  function handleChange(e) {
    if (e.target.id === "color-input") state.color = e.target.value;
    if (e.target.id === "count-select") state.count = e.target.value;
    if (e.target.id === "mode-select") state.mode = e.target.value;
  }

  // Handle generate
  function handleGenerate() {
    onGenerate?.(state);
  }

  // Event listeners
  element.addEventListener("change", handleChange);
  element.addEventListener("click", (e) => {
    if (e.target.id === "generateBtn") handleGenerate();
  });

  render();

  return element;
}

export { Controls };
