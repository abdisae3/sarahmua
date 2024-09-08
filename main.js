const navLinks = document.querySelectorAll('#navLink ul li a');
	navLinks.forEach(link=>{
		link.addEventListener("click",function(){
			navLinks.forEach(link=>link.classList.remove("active"));
			this.classList.add("active");
		})
	})
const btnToggler = document.getElementById('btn-toggler');
btnToggler.addEventListener('click',()=>{
	document.getElementById('navLink').classList.toggle('toggled')
	let hamburger = document.querySelectorAll('.hamburger')
	hamburger[0].classList.toggle('lineTop')
	hamburger[1].classList.toggle('lineMid')
	hamburger[2].classList.toggle('lineBot')
})
const title= location.hash;
if (title === "#contact") {
document.addEventListener('DOMContentLoaded',contact())
} else if (title === "#about"){
document.addEventListener('DOMContentLoaded',about())
}else if (title === "#project"){
document.addEventListener('DOMContentLoaded',project())
}else {
document.addEventListener('DOMContentLoaded',home())
}

function sendMessage() {
	const urlWA=`http://wa.me/6285722922775?text=from : ${phone.value} | email: ${email.value} \n hallo saya ${uname.value}, ${message.value}`
	window.open(urlWA,"_blank")
}