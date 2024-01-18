import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className="">
            this is about page
            <Image src="https://img.freepik.com/premium-photo/future-artificial-intelligence-robot-cyborg_31965-6980.jpg?w=740" alt='cse' width={500} height={500}></Image>
        </div>
    );
};

export default About;