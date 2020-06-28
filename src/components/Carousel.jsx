import React, { Component } from 'react'

export class Carousel extends Component {
    render() {
        return (
            <div>
                 <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 h-100" src="/images/beachPic6.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 h-100" src="/images/beachPic2.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 h-100" src="/images/beachPic3.jpg" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
                
            </div>
        )
    }
}

export default Carousel
