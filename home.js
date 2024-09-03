
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
   <div class="slider">
    <div class="list">
      <div class="item">
        <img class=" left" src="image/download.jpeg" alt="img">
        <img class=" mid" src="image/download (1).jpeg" alt="img">
        <img class=" right" src="image/download (2).jpeg" alt="img">
        <img class=" hide" src="image/downloadwisuda.jpeg" alt="img">
      </div>
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

setInterval(()=>{
let left = document.querySelector('.left')
let mid = document.querySelector('.mid')
let right = document.querySelector('.right')
let hide = document.querySelector('.hide')

left.className='hide'
hide.className='right'
right.className='mid'
mid.className='left'
},10000)
