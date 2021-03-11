$(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault();
      $("#submits").click(function(){  
      var email = $("#email").val();
      var message = $("#comment").val();
      if ($("#email").val() && $("#comment").val()){
        alert ( "we have received your message. Thank you for reaching out to us.");
      }
      
      else {
        alert("Please Enter Your Email!");
      }
      });
    });
    
    
var $slider = $('.slider');
var $slideBox = $slider.find('.slide-box');
var $leftControl = $slider.find('.slide-left');
var $rightControl = $slider.find('.slide-right');
var $slides = $slider.find('.slide');
var numItems = $slider.find('.slide').length;
var position = 0;


var windowWidth = $(window).width();
$slides.width(windowWidth);
$leftControl.on('click', function() {
    var width = $slider.width();
    position = position - 1 >= 0 ? position - 1 : numItems - 1;
    if (position != numItems - 1) {
        $slider.find('.slide').eq(position + 1).css('margin-left', 0);
    } else {
        $slider.find('.slide:gt(0)').each(function(index) {
            $(this).css('margin-left', width * -1 + 'px');
        });
    }
});

$rightControl.on('click', function() {
    var width = $slider.width();
    position = position + 1 < numItems ? position + 1 : 0;
    if (position != 0) {
        $slider.find('.slide').eq(position).css('margin-left', width * -1 + 'px');
    } else {
        $slider.find('.slide').css('margin-left', 0);
    }
});

$(window).resize(function() {
    $slides.width($(window).width()).height($(window).height);
});
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
});

