import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const OurTeam = () => {
    return (
        <div className='my-10'>
            <h5 className='text-xl md:text-3xl lg:text-5xl font-bold text-center'>Meet Our Team</h5>
            <div className='mx-5'>
                <Player
                    className='md:w-[80%] lg:w-[50%]'
                    autoplay
                    loop
                    src="https://lottie.host/2ebe61a2-94cf-4e16-8e92-712b7df06cf0/5NVqztZnBm.json"

                >
                    <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <div>
                <article className='space-y-5'>
                    <h6 className='text-center font-semibold'>
                        Meet the Extraordinary Team Behind <span className='text-rose-600 font-bold text-xl'> SpeedyWheel</span>
                    </h6>

                    <p>
                        At <span className='font-bold text-xl'>SpeedyWheel</span>, we take immense pride in our dedicated and passionate team. Each member brings a unique set of skills, expertise, and a shared commitment to delivering exceptional service to our valued customers. Together, we form a close-knit family that strives to make your car rental experience truly memorable.
                    </p>

                    <p>
                        Here are the incredible individuals who work tirelessly to make your journey with us seamless and enjoyable:
                    </p>

                    <p>
                       <span className='font-bold block'> 1. Madara Uchiha:</span> The visionary behind <span className='font-bold text-xl'>SpeedyWheel</span>, Madara Uchiha is the driving force that sparked our journey. With a deep passion for travel and a relentless pursuit of excellence, Madara Uchiha laid the foundation for our company's success. Their strong leadership and innovative mindset have shaped us into the industry-leading car rental service we are today.
                    </p>

                    <p>
                      <span className='font-bold block'>  2. Customer Experience Team:</span>
                        Our Customer Experience Team is the heart and soul of our organization. Led by Son Goku, this group of friendly and knowledgeable professionals is dedicated to ensuring your satisfaction from the moment you reach out to us. They are experts in tailoring rental plans to your needs, answering your queries, and making your booking process smooth and hassle-free.

                    </p>

                    <p>
                       <span className='font-bold block'> 3. Fleet Management Specialists:</span>
                        Behind our extensive fleet of premium vehicles is a team of skilled Fleet Management Specialists. Headed by Menato Uzmaki, this team works diligently to maintain our cars in top-notch condition. They conduct rigorous inspections, regular servicing, and ensure that each vehicle is equipped with the latest safety features, providing you with a reliable and safe travel companion.
                    </p>

                    <p>
                      <span className='font-bold block'>  4. Marketing and Communications:</span>
                        Our creative Marketing and Communications Team, led by Might guy, is responsible for spreading the word about <span className='font-bold text-xl'>SpeedyWheel</span>. Through engaging campaigns, they share our passion for travel and the joy of exploring new horizons. Their efforts keep you informed about the latest deals, promotions, and company updates, making sure you're always in the loop.
                    </p>

                    <p>
                       <span className='font-bold block'> 5. Technology Wizards:</span>
                        Behind the scenes, our brilliant Technology Wizards, led by Ronoa Zoro, work their magic to keep our online platforms running smoothly. Their expertise ensures that our website is user-friendly, secure, and capable of handling your reservations flawlessly. They are continually innovating to enhance your digital experience with us.
                    </p>

                    <p>
                       <span className='font-bold block'> 6. Operational Excellence Team:</span>
                        Heading the Operational Excellence Team is Ussop, who ensures that everything runs like a well-oiled machine. From logistics to coordinating with our various rental locations, this team works diligently to make sure your chosen vehicle is ready for you when and where you need it.
                    </p>

                    <p>
                       <span className='font-bold block'> 7. Finance and Administration:</span>
                        Behind the scenes, our Finance and Administration team, led by Nami, takes care of the essential financial and administrative aspects of our business. Their meticulous work ensures smooth transactions and supports the overall efficiency of our operations.
                    </p>

                    <p>
                        Together, our team embodies the core values of <span className='font-bold text-xl'>SpeedyWheel</span>: integrity, passion, innovation, and a relentless pursuit of customer satisfaction. We are not just a team – we are a family, united by a common goal: to make your travel dreams a reality.
                    </p>

                    <p>
                        Thank you for choosing <span className='font-bold text-xl'>SpeedyWheel</span>. We look forward to serving you and being a part of your incredible journeys. If there's anything we can do to enhance your experience or if you have any feedback, please do not hesitate to reach out to any member of our team.
                    </p>

                    <p>
                        Happy travels!
                    </p>

                    <span className='font-bold text-xl'>SpeedyWheel</span> Team
                </article>
            </div>
        </div>
    );
};

export default OurTeam;