chrome.runtime.onMessage.addListener(function(command)	{
		findElementsToClickByInnerHTML(command.command);
	});

function findElementsToClickByInnerHTML(commandString) {	//command string must be the innerhtml of button
	var elements = document.querySelectorAll('[data-btn="true"]'),
		elementIndex = elements.length - 1 ;
	while(elementIndex >= 0){
		var element = elements[elementIndex];
		if(element.innerHTML){
			if(typeof element.innerHTML === "string"){
				if(element.innerHTML.toLowerCase().includes(commandString)){
					element.click();
					break;
				}
			}
		}
		elementIndex--;
	}

}