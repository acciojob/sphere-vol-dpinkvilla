// let value=document.getElementById("submit").addEventListerner("click",volume_sphere());
function volume_sphere(event) {
	event.preventDefault();
    //Write your code here
	let r=document.getElementById("radius").value;
	let v=document.getElementById("volume");
	if(r<0 || isNaN(r)){
		v.value="NaN"
		return ;
	}
    // let subm=documet.getElementById("submit")
	let ans= (4/3) * Math.PI * Math.pow(r, 3); //you can also use (r**3) instead of math.pow
	ans=ans.toFixed(4);
	v.value=ans;
	
} 
// let value=document.addEventListerner("click",volume_sphere());

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
