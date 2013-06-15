function checkForPrompt() {
  $('div[role="button"]').each(function(idx, item) {
    if ($(item).html().indexOf("Yes") >= 0) {
      simulateClick(item);
    }
  });
}

window.setInterval(checkForPrompt, 15000); // Repeat every 15 seconds
