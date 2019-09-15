chrome.webNavigation.onCompleted.addListener(function() {
	chrome.commands.onCommand.addListener(function(command)	{
		sendMessageToSelectedTab(command);
	});
}, {url: [{urlMatches : 'https://www.codecademy.com/*'}]});

function sendMessageToSelectedTab(commandString)	{
	chrome.tabs.getSelected(function(selectedTab){
		chrome.tabs.sendMessage(selectedTab.id, {'command' : commandString});
	});
}