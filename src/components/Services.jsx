import aos from 'aos';
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const Services = (props) => {
    useEffect(() => {
        aos.init({duration: 2000})
      }, [])
      
    return(
        <div className='my-4'>
            <h2 className='text-center my-4'>{props.heading}</h2>
            <div className='d-flex container'>
                <div className="card mx-2" data-aos={props.left}>
                    <img src={props.imageFour} className="card-img-top services-image" alt="services-image"/>
                    <div className="card-body">
                        <h5 class="card-title">Goods Shipping</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card mx-2" data-aos={props.center}>
                    <img src={props.imageFive} className="card-img-top services-image" alt="services-image"/>
                    <div className="card-body">
                        <h5 class="card-title">Flying Boat</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card mx-2" data-aos={props.right}>
                    <img src={props.imageSix} className="card-img-top services-image" alt="services-image"/>
                    <div className="card-body">
                        <h5 class="card-title">Yatch Party</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services