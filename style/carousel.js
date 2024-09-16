const service = [];
services.forEach(item=>{
        service.push(item)        
})
function carousel() {
const left = document.querySelector(".left");
const mid = document.querySelector(".mid");
const right = document.querySelector(".right");
left.innerHTML = `<img src="image/${service[0].image}" alt="image1"><div class="carousel-caption">
        <h5>${service[0].title}</h5>
        <p>${service[0].description}</p>
      </div>`;
mid.innerHTML = `<img src="image/${service[1].image}" alt="image2"><div class="carousel-caption">
        <h5>${service[1].title}</h5>
        <p>${service[1].description}</p>
      </div>`;
right.innerHTML = `<img src="image/${service[2].image}" alt="image3"><div class="carousel-caption">
        <h5>${service[2].title}</h5>
        <p>${service[2].description}</p>
      </div>`;
		setInterval(()=>{
service.push(service[0]);
service.shift();
left.innerHTML = `<img src="image/${service[0].image}" alt="image1"><div class="carousel-caption">
        <h5> ${service[0].title}</h5>
        <p>${service[0].description}.</p>
      </div>`;
mid.innerHTML = `<img src="image/${service[1].image}" alt="image2"><div class="carousel-caption">
        <h5> ${service[1].title}</h5>
        <p>${service[1].description}.</p>
      </div>`;
right.innerHTML = `<img src="image/${service[2].image}" alt="image3"><div class="carousel-caption">
        <h5> ${service[2].title}</h5>
        <p>${service[2].description}.</p>
      </div>`;
},10000);
}