chrome.runtime.onMessage.addListener(function(command)	{
		findButtonByInnerHTML(command.command);
	});

function findButtonByInnerHTML(commandString) {	//command string must be the innerhtml of button
	var buttons = document.querySelectorAll('button');
	buttons.forEach(function(element,index){
		if(typeof element.innerHTML === "string"){
			if(element.innerHTML.toLowerCase() === commandString){
				element.click();
			}
		}
	});
}