import "./style.css";
import { getColor, getScheme } from "./services/colorAPI";
import { Controls } from "./components/Controls";
import { Palette } from "./components/Palette";
import { generateRandomHex } from "./services/generateRandomHex";

const initialHEX = generateRandomHex();
const appState = {
  seedColor: "",
  colors: [],
};

const app = document.querySelector("#app");
app.classList =
  "flex h-dvh items-center justify-center bg-neutral-50 flex flex-col relative";

const paletteEl = Palette({
  colors: appState.colors,
  className:
    /* tw */ "h-full w-full flex flex-col md:flex-row md:w-[1128px] md:h-96",
});

const controlsEl = Controls({
  onGenerate: async (state) => {
    console.log("Generate pressed with:", state);
    const res = await getScheme(
      state.color.replace("#", ""),
      state.count,
      state.mode,
    );

    appState.colors = res.colors;

    paletteEl.updateColors(appState.colors);
  },
  initialState: {
    color: initialHEX,
    count: 12,
  },
  className:
    /* tw */ "flex flex-col gap-3 bg-neutral-100 border border-neutral-200 p-3 rounded-t-xl w-full sm:w-96 sm:absolute sm:bottom-4 sm:rounded-lg",
});

app.appendChild(paletteEl);
app.appendChild(controlsEl);

// Generate Palette on load
async function init() {
  const res = await getScheme(initialHEX.replace("#", ""), 12, "");
  appState.colors = res.colors;
  console.log(res);

  paletteEl.updateColors(appState.colors);
}

init();
