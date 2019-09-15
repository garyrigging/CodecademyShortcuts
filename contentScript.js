chrome.runtime.onMessage.addListener(function(command)	{
		findElementsToClickByInnerHTML(command.command);
	});

function findElementsToClickByInnerHTML(commandString) {	//command string must be the innerhtml of button
	var elements = document.querySelectorAll('[data-btn="true"]'),
		elementIndex = 0 ;
	while(elementIndex < elements.length){
		var element = elements[elementIndex];
		if(typeof element.innerHTML === "string"){
			if(element.innerHTML.toLowerCase().includes(commandString)){
				element.click();
			}
		}
		elementIndex++;
	}

}