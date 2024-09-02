const navLinks = document.querySelectorAll('#navLink ul li a');
	navLinks.forEach(link=>{
		link.addEventListener("click",function(){
			navLinks.forEach(link=>link.classList.remove("active"));
			this.classList.add("active");
		})
	})
// document.addEventListener('DOMContentLoaded',navLinks.forEach(link=>{
// 	link.classList.remove("active");
// 	if (link.href === document.URL) {link.classList.add('active')}
// 		else{}
// 	}));
// const btnToggler = document.getElementById('btn-toggler');
// btnToggler.addEventListener('click',()=>{
// 	document.getElementById('navLink').classList.toggle('toggled')
// 	// document.querySelectorAll('.hamburger').classList.toggle('x')
// })
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



// let forms= document.querySelectorAll('form')
// forms.forEach(form)
// function form(val) {
// 	let button = val.submit
// 	button.addEventListener('click',(e)=>{
// 	e.preventDefault();
// 	fetch("http://abdisae.great-site.net/message/api.php",{
// 		method:'POST',
// 		headers:{
// 			'Content-Type':'application/json'
// 		},
// 		body: JSON.stringify({
// 			name:val.name.value,
// 			phone:val.phone.value,
// 			email:val.email.value,
// 			message:val.message.value
// 		})
// 	})
// 		.then((result)=>result.json())
// 		.then((data)=>{
// 			if (data.status_code ==200) {
// 				alert(data.status_code+'\n'+ data.message + ' :\n' + data.result.pesan)
// 				val.reset()
// 			} else {
// 				alert(data.status_code+'\n'+ data.result + ' :\n' + data.message)
// 			}
// 		})
// 	})
// }

function sendMessage() {
	const urlWA=`http://wa.me/6285722922775?text=from : ${phone.value} | email: ${email.value} \n hallo saya ${uname.value}, ${message.value}`
	window.open(urlWA,"_blank")
}