import React from 'react'

type Props = {
    tip: string;
    postedBy: string;
    postedOn: string
}

const TipCards = ({tip, postedBy, postedOn}: Props) => {
    

    return (
        <div className='bg-white shadow-md rounded-lg  p-4 mb-4'>
            <h2 className='text-custom-font-primary font-inika font-semibold text-lg'>{tip}</h2>
            <div className='flex justify-between'>
            <p className='text-custom-font-primary font-inika text-sm'>Posted by: {postedBy}</p>
            <p className='text-custom-font-primary font-inika text-sm'>on: {postedOn}</p>
            </div>
           <div>
          
           </div>
            
            </div>
    )
}

export default TipCards
