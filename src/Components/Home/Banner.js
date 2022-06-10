import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen  mt-8 lg:mt-0">
            <div className="hero-content flex-col lg:flex-row">

                <div className='lg:mr-10'>
                    <p
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1000" className='font-semibold mb-5 text-lg text-purple-400 uppercase'>mern stack web developer</p>
                    <h1 data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="1000" className="text-5xl font-bold mb-2 ">Hello, I'm <span className='text-primary'>Shakiba</span></h1>

                    <p data-aos="fade-right"
                        data-aos-delay="400"
                        data-aos-duration="1000" >Email : shakibaalam092@gmail.com</p>

                    <p data-aos="fade-right"
                        data-aos-delay="500"
                        data-aos-duration="1000" className="py-6">Passionate to work as a MERN Stack Web Developer for a software firm where I can leverage my talents in Web Design , Front-End and Back-End Web Developer to give excellent customer service</p>


                    <Link data-aos="fade-right"
                        data-aos-delay="700"
                        data-aos-duration="1000" to='/contact'><button class="btn btn-secondary text-white"> Contact me</button></Link>

                </div>
                <img data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="1000" src="https://i.ibb.co/nMvmP4y/IMG-20220504-215404.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" alt='' />
            </div>
        </div>
    );
};

export default Banner;