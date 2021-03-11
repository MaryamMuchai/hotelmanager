function getReceipt() {
	text1 = "";
	text2 = "";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("rice");
	for (var i = 0; i < itemArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedItem+"<br>";
		}
	}
	if (selectedItem === "jeera rice") {
		itemTotal = 6;
		text2 = text2+itemTotal+"<br>";
	} else if (selectedItem === "fried rice") {
		itemTotal = 10;
		text2 = text2+itemTotal+"<br>";
	} else if (selecteditem === "clear soup") {
		itemTotal = 14;
		text2 = text2+itemTotal+"<br>";
	} else if (selectedItem === "pasta putanesca") {
		itemTotal = 16;
		text2 = text2+itemTotal+"<br>";
	}
	runningTotal = itemTotal;
	getFriedrice(runningTotal,text1,text2);
};

