var runCount = 0;
chrome.webNavigation.onCompleted.addListener(function() { 
	console.log('running ' + runCount);
	runCount++;
	chrome.commands.onCommand.addListener(function(command)	{
		sendMessageToSelectedTab(command);
	});
}, {url: [{urlMatches : 'https://www.codecademy.com/*'}]});

function sendMessageToSelectedTab(commandString)	{
	chrome.tabs.getSelected(function(selectedTab){
		chrome.tabs.sendMessage(selectedTab.id, {'command' : commandString});
	});
}