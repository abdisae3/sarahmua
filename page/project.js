let servicestext = ""
testimony.forEach(testi=>{
		servicestext += `<div class="row">
			<div class="col">
				<img src="image/${testi.image}" alt="" height="auto" width="100%">
			</div>
			<div class="col">
				<h2>${testi.name}</h2>
				<span>Service : ${testi.service}</span>
				<p>Testimony : ${testi.testimony}</p>
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
