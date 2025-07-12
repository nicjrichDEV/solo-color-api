import { MODES } from "../services/colorAPI";
import { ColorInput } from "./ColorInput";
import { ColorCountSelect } from "./ColorCountSelect";
import { ColorModeSelect } from "./ColorModeSelect";

function Controls({ onGenerate, initialState = {}, className = "" }) {
  const state = {
    color: "#fee2e2",
    count: 6,
    mode: MODES.monochrome,
    ...initialState,
  };

  const element = document.createElement("div");
  element.className = className;

  const colorEl = ColorInput({
    onChange: (colorState) => {
      state.color = colorState.color;
    },
    initialState: {
      color: state.color,
    },
  });

  const countEl = ColorCountSelect({
    onSelect: (countState) => {
      state.count = countState.count;
    },
    initialState: {
      count: state.count,
    },
    className:
      "select select border border-1 border-neutral-300 rounded-lg w-full",
  });

  const modeEl = ColorModeSelect({
    onSelect: (modeState) => {
      state.mode = modeState.mode;
    },
    initialState: {
      mode: state.mode,
    },
    className: "select border border-1 border-neutral-300 rounded-lg w-full",
  });

  function render() {
    element.innerHTML = /* html */ `
            <div class="flex gap-2">
                <div id="color-input-slot"></div>
                <div id="color-count-slot" class="w-full max-w-16"></div>
                <div id="color-mode-slot" class="w-full"></div>
            </div>
            <button id="generateBtn" class="bg-violet-600 w-full rounded-lg text-white font-bold h-10 tracking-tighter">Generate Palette</button>
        `;
    element.querySelector("#color-input-slot").appendChild(colorEl);
    element.querySelector("#color-count-slot").appendChild(countEl);
    element.querySelector("#color-mode-slot").appendChild(modeEl);
  }

  function handleGenerate(e) {
    if (e.target.id === "generateBtn") onGenerate?.(state);
  }

  render();

  element
    .querySelector("#generateBtn")
    .addEventListener("click", handleGenerate);

  return element;
}

export { Controls };
