
home=()=>{
	document.getElementById('app').innerHTML=
	`<section>
  <div class="jumbotron row align-items-center">
  	<div class="col text-center text-muted fs-1">
  		<h1>Nama Bisnis dan sedikit tagline</h1>
  	</div>
  </div>
</section>
<section>
  <div class="row justify-content-evenly py-3 my-5 bg-grey">
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
  </div>
</section>
<section class="my-5 py-3">
  <div class="row m-5">
    <div class="col border border-5 mx-5">
  		<img src="image/rias-makeup-7.png" alt="photo" class="my-3  border border-5">
    </div>
    <div class="col mx-5 text-center align-content-center px-5 border border-5">
    	<p class=" border border-5 p-5">
    	itaque fuga dicta autem quam rem nulla Similique, quis delectus voluptatibus aliquam consequatur ullam reiciendis, beatae accusantium est, dolorum repudiandae totam tenetur. Quo, autem? Totam, dolorem porro commodi architecto, itaque ex aut sequi! Eligendi ipsam eum accusantium nulla nostrum repellendus sapiente possimus odio incidunt! Laboriosam sint laudantium ducimus velit repudiandae. Error, itaque, soluta?
      </p>
    </div>
  </div>
</section>
<script  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
`
	document.querySelector('title').innerHTML='Home';
}
// document.addEventListener('DOMContentLoaded',home())

setInterval(()=>{
let left = document.querySelector('.left')
let mid = document.querySelector('.mid')
let right = document.querySelector('.right')
let hide = document.querySelector('.hide')

left.className='hide'
hide.className='right'
right.className='mid'
mid.className='left'
},5000)
