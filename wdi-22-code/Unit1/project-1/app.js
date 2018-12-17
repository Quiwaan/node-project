document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM was loaded!');
});

var i = 0;
var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");
var inputNumber = document.getElementById("type");
var topNumber =  document.getElementById("topnumber")
minusButton.addEventListener("click", minusOne)
plusButton.addEventListener("click", plusOne)

        function plusOne() {
        document.getElementById("topnumber").value = ++i;
    }
    
    function minusOne(){
    	document.getElementById("topnumber").value = --i;
    }