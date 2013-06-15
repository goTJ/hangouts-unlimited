function simulateClick(target) {
  function simulate(target, evtName) {
    evt = document.createEvent("MouseEvents");

    evt.initMouseEvent(evtName, true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, target);
    target.dispatchEvent(evt);
  }

  simulate(target, "mouseover");
  simulate(target, "mousedown");
  simulate(target, "mouseup");
  simulate(target, "mouseout");
}
