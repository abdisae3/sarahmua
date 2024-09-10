let servicestext = ""
services.forEach(service=>{
		servicestext += `<div class="row">
			<div class="col">
				<img src="image/${service.image}" alt="" height="auto" width="100%">
			</div>
			<div class="col">
				<h2>${service.title}</h2>
				<span>${service.price}</span>
				<p>${service.description}</p>
			</div>
		</div>`
})
features=()=>{
	clearInterval(slideInterval);
	document.getElementById('app').innerHTML= 
	`<div class="features">
		${servicestext}
	</div>`;
		document.querySelector('title').innerHTML='Project';
}
