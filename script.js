chrome.commands.onCommand.addListener(function(command)	{
		sendMessageToSelectedTab(command);
	});

/*chrome.runtime.onSuspend.addListener(function() {
	chrome.runtime.reload();
});
*/

function sendMessageToSelectedTab(commandString)	{
	chrome.tabs.getSelected(function(selectedTab){
		chrome.tabs.sendMessage(selectedTab.id, {'command' : commandString});
	});
}