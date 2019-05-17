<template>
<div>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__340.jpg" class="d-block w-100" alt="Imagem 1">
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/08/16/00/59/panorama-2646143__340.jpg" class="d-block w-100" alt="Imagem 2">
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2013/10/09/02/26/sky-192983__340.jpg" class="d-block w-100" alt="Imagem 3">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>

</template>

<script>
export default {
  name: 'Carrossel'
}
</script>

