document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM was loaded!');

var calButton = document.getElementById(temp);
// var cel = getElementById("output");


	temp.addEventListener('submit', function(event) {
		event.preventDefault();
		console.log('Submit');
		convert()
	})
	
function convert(){
	var fah = document.getElementById("tempNumber").value;
	var cel = (fah - 32) * (5/9);
	document.getElementById("output").textContent = cel;
}
})





	// // var cel = getElementById("output")

	// var input = document.getElementById("tempNumber")[0];
	

	//  document.getElementById("tempNumber").textContent - 32* 5/9;
	// document.getElementById("tempNumber").textContent = Math.round((-32)*5/9) + "output"
	// // document.getElementById("output").textContent = ;
	// // console.log()









