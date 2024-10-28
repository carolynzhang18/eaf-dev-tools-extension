/* eslint-disable no-undef */
chrome.runtime.onMessage.addListener((request) => {
  const { violations } = request;
  if (!violations) {
    return;
  }
  violations.forEach(violationData => {
    const { nodes } = violationData;
    nodes.forEach(nodeData => {
      const { impact } = nodeData;
      const isSevere = impact === "critical" || impact === "serious";

      // Get element using target
      const queryTarget = nodeData.target[0];
      const element = document.querySelector(queryTarget);
      if (!element) {
        return;
      }

      // Set styles on element
      element.style.border = `solid ${isSevere ? "red" : "orange"} 2px`;
      element.style.backgroundColor = isSevere ? "#ffeceb" : "#fff5eb";
      element.style.cursor = "pointer";
      element.onclick = (event) => {
        event.stopPropagation();
        alert(
          `VIOLATION (${impact.toUpperCase()}): ${nodeData.any[0]?.message ?? "[no message available]"}\n\nSUGGESTION: ${nodeData.failureSummary}`
        );
        const redirect = prompt("Open external help page? [y/n] (default n)");
        if (redirect.toLowerCase() === "y") {
          window.open(violationData.helpUrl, "_blank")?.focus();
        }
      };
    });
  });
});
