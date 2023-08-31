import React from 'react'
import Image from 'next/image';
import calloutIcon from '../../../public/images/callout.svg';
import { CalloutProps } from '@/types/components/callout';

const Callout: React.FC<CalloutProps> = ({ title }) => {
    return (
        <div className='b-callout'>
            <Image src={calloutIcon} width={150} height={100} alt='callout-icon' />
            <span className='b-callout-title'>{title}</span>
        </div>
    )
}

export default Callout