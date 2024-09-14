import Docutopia from "./components/Docutopia.svelte";
import "./styles/theme.css";

class DocutopiaElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    new Docutopia({
      target: shadow,
    });
  }
}

customElements.define("docu-topia", DocutopiaElement);
