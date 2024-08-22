import Carousel from '../components/Carousel'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import imageFour from '../images/imageFour.jpg'
import imageFive from '../images/imageFive.jpg'
import imageSix from '../images/imageSix.jpg'
import imageOne from '../images/imageOne.jpg'
import imageTwo from '../images/imageTwo.jpg'
import imageThree from '../images/imageThree.jpg'

const Home = () => {
  return (
    <div>
      <Carousel/> 
      <Services heading="Our Services" imageFour={imageFour} imageFive={imageFive} imageSix={imageSix} left="fade-down-right" center="fade-down" right="fade-down-left"/>
      <Services imageFour={imageOne} imageFive={imageTwo} imageSix={imageThree} left="fade-up-right" center="fade-up" right="fade-up-left"/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home
