
home=()=>{
	document.getElementById('app').innerHTML=
	`<section>
  <div class="jumbotron ">
  	<div class="tagline">
  		<h1>Nama Bisnis dan sedikit tagline</h1>
  	</div>
  </div>
</section>
<section>
   <div class="carousel">
    <div class="carousel-inner">
      <div class="carousel-item left"><img src="image/download.jpeg" alt=""><div class="carousel-caption">
        <h5>Slide label</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste eum nobis quo distinctio, corporis a.</p>
      </div></div>
      <div class="carousel-item mid"><img src="image/download (1).jpeg" alt=""><div class="carousel-caption">
        <h5>Slide label</h5>
        <p>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Animi laudantium velit fugit! Suscipit, inventore, commodi?</p>
      </div></div>
      <div class="carousel-item right"><img src="image/download (2).jpeg" alt=""><div class="carousel-caption">
        <h5>Slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere unde deserunt dicta voluptate porro.</p>
      </div></div>
      <div class="carousel-item hide"><img src="image/downloadwisuda.jpeg" alt=""><div class="carousel-caption">
        <h5>Slide label</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, harum, voluptates ad voluptate praesentium suscipit.</p>
      </div></div>
    </div>
  </div>
</section>
<section class=" home-about">
  <div class="row ">
    <div class="col">
  		<img src="image/rias-makeup-7.png" alt="photo">
    </div>
    <div class="col ">
    	<p>
    	itaque fuga dicta autem quam rem nulla Similique, quis delectus voluptatibus aliquam consequatur ullam reiciendis, beatae accusantium est, dolorum repudiandae totam tenetur. Quo, autem? Totam, dolorem porro commodi architecto, itaque ex aut sequi! Eligendi ipsam eum accusantium nulla nostrum repellendus sapiente possimus odio incidunt! Laboriosam sint laudantium ducimus velit repudiandae. Error, itaque, soluta?
      </p>
    </div>
  </div>
</section>
`
	document.querySelector('title').innerHTML='Home';
}

const items = document.querySelectorAll('.carousel-item');

function slide() {
  const left = document.querySelector('.left')
  const mid = document.querySelector('.mid')
  const right = document.querySelector('.right')
  const hide = document.querySelector('.hide')
  left.className='carousel-item hide'
  hide.className='carousel-item right'
  right.className='carousel-item mid'
  mid.className='carousel-item left'  
}
const slideInterval = setInterval(slide,10000)