chrome.runtime.onMessage.addListener(function(command)	{
		findElementsToClickByInnerHTML(command.command);
	});

function findElementsToClickByInnerHTML(commandString) {	//command string must be the innerhtml of button
	var elements = document.querySelectorAll('[data-btn="true"]');
	for (var i = elements.length - 1; i >= 0; i--) {
		var element = elements[i];
		if(element.innerHTML){
			if(typeof element.innerHTML === "string"){
				if(element.innerHTML.toLowerCase().includes(commandString)){
					element.click();
					break;
					}
				}
			}
		}
	}