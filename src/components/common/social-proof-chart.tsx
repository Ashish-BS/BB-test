import React from 'react';
import Card from './card';
import socialStatsJson from '@/fixtures/social-stats.json'


export function SocialProofChart() {
    return (
        <div className='row'>
            {socialStatsJson && socialStatsJson.map(item => (
                <div className="col-lg-4 col-md-6 col-sm-12 my-2" key={item.id}>
                    <Card {...item} />
                </div>
            ))}
        </div>
    )
}
