import Image from 'next/image'
import React from 'react'
import GreenArrow from '../../../public/images/green-arrow.svg'
import { CardPropType } from '@/types/components/card'


const Card:React.FC<CardPropType> = ({followers, icon, reach, title}) => {
  return (
    <div className='card b-stats-card'>
        <div className="card-header border-0">
            <Image src={icon} alt={`${title} icon`} width={50} height={50} />
        </div>
        <div className="card-body">
            <div className="v-card-content">
                <div className='b-reach'>
                    <label htmlFor="reach">Reach</label>
                    <span>{reach}<Image src={GreenArrow} alt='Green arrow'/></span>
                </div>
                <div className='b-followers'>
                    <label htmlFor="reach">Followers</label>
                    <span>{followers}<Image src={GreenArrow} alt='Green arrow'/></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card