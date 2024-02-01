const Carsol = ()=> {
  return( <>

<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="\images\student1.jpg" class="rounded-5 mx-auto d-block figure-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="\images\Student2.jpg" class="rounded mx-auto d-block figure-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="\images\student3.jpg" class="rounded mx-auto d-block figure-img" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>);

}
export default Carsol;