// document.getElementById('count-el').innerText = 5;
let count = 0;
console.log(count);
let coutEl = document.getElementById("count-el")
function incrementCounter()
{
	console.log("Add button clicked")
	count++;
	coutEl.innerText = count;
}
 function save()
 {
 	console.log("save button clicked");
 	localStorage.setItem("countVal",count);
 	let savedCount= localStorage.getItem("countVal");
 	console.log("the saved value from the db=>",savedCount)
 	count =0;
 	coutEl.innerText = 0;

 }


 

