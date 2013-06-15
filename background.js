chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  var action = request.action;

  if (action == "showPageAction") {
    chrome.pageAction.show(sender.tab.id);
  }
  sendResponse({});
};

