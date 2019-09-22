function sendMessageToSelectedTab(commandString)	{
	chrome.tabs.getSelected(function(selectedTab){
		chrome.tabs.sendMessage(selectedTab.id, {'command' : commandString});
	});
}

chrome.commands.onCommand.addListener(function(command)	{
		sendMessageToSelectedTab(command);
	});

chrome.idle.onStateChanged.addListener(function() {
	chrome.commands.onCommand.addListener(function(command)	{
		sendMessageToSelectedTab(command);
	});
});