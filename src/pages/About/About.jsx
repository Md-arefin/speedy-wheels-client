import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const About = () => {
    return (
        <div className='my-10'>
            <h1 className='text-xl md:text-5xl lg:text-5xl text-center font-bold'>About us</h1>
            <div className='mx-5'>
                <Player
                    className='md:w-[80%] lg:w-[50%]'
                    autoplay
                    loop
                    src="https://lottie.host/17be4b0d-debf-454c-a2c6-dd3b44e73b30/cJGXu8tTax.json"

                >
                    <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>

            <article className='space-y-5 px-5'>
                <h6 className='text-xl font-semibold mb-2 text-center'> Welcome to <span className='text-rose-600 font-bold text-lg'>SpeedyWheel</span></h6>

                <p>
                    At <span className='text-rose-600 font-bold text-lg'>SpeedyWheel</span>, we believe that every journey should be filled with convenience, comfort, and unforgettable moments. That's why we are dedicated to providing top-notch car rental services that cater to all your travel needs. Whether you're embarking on a thrilling road trip, exploring a new city, or simply need a reliable ride to get you around town, we've got you covered.
                </p>

                <p>
                    <span className='text-lg font-bold my-2 block'>Our Story:</span>
                    <span className='text-rose-600 font-bold text-lg'>SpeedyWheel</span> was founded with a passion for making travel accessible and enjoyable for everyone. Our journey began with a vision to revolutionize the car rental industry by offering unparalleled service, competitive rates, and a fleet of premium vehicles that cater to various preferences and requirements. Over the years, we have grown into a trusted name in the car rental business, serving countless satisfied customers who keep coming back to experience the difference.
                </p>

                <p>
                   <span className='text-lg font-bold my-2 block'> Why Choose Us?</span>
                    <span className='font-bold block'>1. Extensive Fleet: </span> Our diverse fleet comprises a wide selection of vehicles, from compact cars perfect for city exploration to spacious SUVs ideal for family getaways. Whatever your travel plans entail, we have the perfect car to match your style and needs.
                </p>

                <p>
                    <span className='font-bold block'>2. Seamless Booking:</span> We understand that time is precious, so we've streamlined our booking process to be quick and user-friendly. Our online reservation system allows you to book your preferred vehicle with just a few clicks, or you can always reach out to our friendly customer support team for assistance.
                </p>

                <p>
                    <span className='font-bold block'>3. Exceptional Service:</span> At <span className='text-rose-600 font-bold text-lg'>SpeedyWheel</span>, we believe that exceptional service is the key to creating memorable experiences. Our team of dedicated professionals is committed to providing personalized assistance and ensuring that every aspect of your rental journey is smooth and stress-free.
                </p>

                <p>
                    <span className='font-bold block'>4. Affordable Rates:</span> We believe that quality car rental shouldn't break the bank. That's why we offer competitive rates and various rental packages designed to suit different budgets. With no hidden fees, what you see is what you get – transparency is our policy.
                </p>

                <p>
                    <span className='font-bold block'>5. Flexibility:</span> We understand that plans can change, so we offer flexible rental options to accommodate your needs. Whether you require a short-term rental or an extended journey, we've got flexible plans to make it happen.
                </p>

                <p>
                   <span className='font-bold block'> 6. Safety First:</span> Your safety is our top priority. We meticulously maintain and inspect our vehicles to ensure they are in pristine condition and comply with all safety standards. Travel with peace of mind, knowing that you're in safe hands.
                </p>

                <p>
                    <span className='font-bold block'>Discover the Joy of Hassle-Free Travel:</span>
                    At <span className='text-rose-600 font-bold text-lg'>SpeedyWheel</span>, we're not just in the business of renting cars; we're in the business of creating memorable journeys. Whether you're a seasoned traveler or a first-time adventurer, we invite you to experience the joy of hassle-free travel with us.
                </p>

                <p>
                    Thank you for considering <span className='text-rose-600 font-bold text-lg'>SpeedyWheel</span> as your trusted travel partner. We look forward to serving you and being a part of your exciting travel escapades. If you have any questions or need assistance, don't hesitate to get in touch – our team is always here to help.
                </p>

                <p>
                    Start your adventure today! Book your dream car and hit the road with <span className='text-rose-600 font-bold text-lg'>SpeedyWheel</span>. Let's make your travel dreams a reality!
                </p>
            </article>
        </div>
    );
};

export default About;