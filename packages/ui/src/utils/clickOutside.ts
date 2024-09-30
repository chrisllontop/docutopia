export function clickOutside(node: HTMLElement) {
  const handleClick = (event: Event) => {
    const path: EventTarget[] = event.composedPath();
    if (node && path.indexOf(node) === -1 && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent("click_outside", { detail: node }));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
