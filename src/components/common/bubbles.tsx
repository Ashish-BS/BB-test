import React from 'react'
import Image from 'next/image'
import Elipse1 from '../../../public/images/ellipse-1.svg';
import Elipse2 from '../../../public/images/ellipse-2.svg';
import Elipse3 from '../../../public/images/ellipse-3.svg';
import Elipse4 from '../../../public/images/ellipse-4.svg';
import Elipse5 from '../../../public/images/ellipse-5.svg';
import Elipse6 from '../../../public/images/ellipse-6.svg';
import Elipse7 from '../../../public/images/ellipse-7.svg';

const Bubbles:React.FC = () => {
    return (
        <div className='b-bubble-background'>
            <Image src={Elipse1} width={40} height={40} alt='bubble-svg' />
            <Image src={Elipse2} width={40} height={40} alt='bubble-svg' />
            <Image src={Elipse3} width={40} height={40} alt='bubble-svg' />
            <Image src={Elipse4} width={40} height={40} alt='bubble-svg' />
            <Image src={Elipse5} width={40} height={40} alt='bubble-svg' />
            <Image src={Elipse6} width={40} height={40} alt='bubble-svg' />
            <Image src={Elipse7} width={40} height={40} alt='bubble-svg' />
        </div>
    )
}

export default Bubbles