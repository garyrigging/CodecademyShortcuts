chrome.commands.onCommand.addListener(function(command)	{
		sendMessageToSelectedTab(command);
});

function sendMessageToSelectedTab(commandString)	{
	chrome.tabs.getSelected(function(selectedTab){
		chrome.tabs.sendMessage(selectedTab.id, {'command' : commandString});
	});
}