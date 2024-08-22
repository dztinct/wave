import imageSeven from '../images/imageSeven.jpg'

const About = () => {
  return (
    <div className='about-container text-light'>
        <div className='container'>
            <h2 className='text-center py-4'>About Us</h2>
            <div className='d-flex'>
                <div className='mx-2'>
                    <img src={imageSeven} alt="about-image" className='about-image'/>
                </div>
                <div className='mx-2'>
                    <h4>Thrilling &amp; Exciting Experience</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque explicabo, vel ab voluptas facilis fugit molestias a, perspiciatis modi sint libero animi ratione eveniet sequi ipsum tempora totam quam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque explicabo, vel ab voluptas facilis fugit molestias a, perspiciatis modi sint libero animi ratione eveniet sequi ipsum tempora totam quam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque explicabo, vel ab voluptas facilis fugit molestias a, perspiciatis modi sint libero animi ratione eveniet sequi ipsum tempora totam quam.
                    </p>
                    <h4>Safety &amp; Health In Check</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque explicabo, vel ab voluptas facilis fugit molestias a, perspiciatis modi sint libero animi ratione eveniet sequi ipsum tempora totam quam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque explicabo, vel ab voluptas facilis fugit molestias a, perspiciatis modi sint libero animi ratione eveniet sequi ipsum tempora totam quam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque explicabo, vel ab voluptas facilis fugit molestias a, perspiciatis modi sint libero animi ratione eveniet sequi ipsum tempora totam quam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque explicabo, vel ab voluptas facilis fugit molestias a, perspiciatis modi sint libero animi ratione eveniet sequi ipsum tempora totam quam.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
