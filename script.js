chrome.webNavigation.onCompleted.addListener(function() {
	chrome.commands.onCommand.addListener(function(command)	{
		switch (command) {
			case 'run':
				getSelectedTab_RunScript("run.js");
				break;
			case 'next':
				getSelectedTab_RunScript("next.js");
				break;
			default:
				console.log("That's a command the Codecamedy Shortcut extension doesn't know");
		}
	});
}, {url: [{urlMatches : 'https://www.codecademy.com/*'}]});

function getSelectedTab_RunScript(scriptFileNameString)	{
	chrome.tabs.getSelected(function(selectedTab){
		chrome.tabs.executeScript( selectedTab.id, { file: scriptFileNameString},function(results){
			//if the script has results, or a follow up action, they can be fired 
		});
	});
}