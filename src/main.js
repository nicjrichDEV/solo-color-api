import "./style.css";
import { getColor, getScheme } from "./services/colorAPI";
import { Controls } from "./components/Controls";
import { Palette } from "./components/Palette";

const appState = {
  colors: [],
};

const app = document.querySelector("#app");
app.classList = "flex h-dvh items-center justify-center bg-neutral-50 relative";

const paletteEl = Palette({
  colors: appState.colors,
});

const controlsEl = Controls({
  onGenerate: async (state) => {
    console.log("Generate pressed with:", state);
    const res = await getScheme(state.color.replace("#", ""), state.count);

    appState.colors = res.colors;

    paletteEl.updateColors(appState.colors);
  },
  initialState: {
    color: "#ff23ad",
    count: 12,
  },
  className:
    /* tw */ "bg-neutral-100 border border-neutral-200 absolute bottom-2 p-3 rounded-xl size-fit",
});

app.appendChild(controlsEl);
app.appendChild(paletteEl);
