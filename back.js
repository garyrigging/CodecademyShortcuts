var buttons = document.querySelectorAll('button[data-btn="true"]');
buttons.forEach(function(element,index){
	if(element.innerHTML === 'Back'){
		element.click();
	}
});