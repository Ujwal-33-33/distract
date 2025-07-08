chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.closeTab && sender.tab && sender.tab.id) {
    chrome.tabs.remove(sender.tab.id);
  }
});
