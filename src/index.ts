import Docutopia from "./components/Docutopia.svelte";

class DocutopiaElement extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		new Docutopia({
			target: shadow,
		});
	}
}

customElements.define("docutopia", DocutopiaElement);
