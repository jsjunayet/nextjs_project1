import Image from 'next/image';
import React from 'react';
import img from "/src/img/contacj.jpg"

const Contact = () => {
    return (
        <div>
            this is contact page:
            <Image src={img} alt='contact' width={500} height={300}></Image>
        </div>
    );
};

export default Contact;