showPageAction();

function checkForPrompt() {
  $('button').each(function(idx, item) {
    if ($(item).html().indexOf("still listening") >= 0 ||
        $(item).html().indexOf("Resume playing") >= 0) {
      simulateClick(item);
    }
  });
}

window.setInterval(checkForPrompt, 15000); // Repeat every 15 seconds
