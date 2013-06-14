function checkForPrompt() {
  function simulate(target, evtName) {
    evt = document.createEvent("MouseEvents");

    evt.initMouseEvent(evtName, true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, target);
    target.dispatchEvent(evt);
  }

  function simulateClick(target) {
    simulate(target, "mouseover");
    simulate(target, "mousedown");
    simulate(target, "mouseup");
    simulate(target, "mouseout");
  }

  $('div[role="button"]').each(function(idx, item) // For each div with attribute role = "button"
      {
      if ($(item).html().indexOf("Yes") >= 0) // Correct button found
      {
      simulateClick(item);
      }
      });

  setTimeout(checkForPrompt, 15000); // Repeat every 15 seconds
}

setTimeout(checkForPrompt, 15000); // Repeat every 15 seconds
