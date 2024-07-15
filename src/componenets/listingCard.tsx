import React from 'react'

interface Props {}

function ListingCard(props: Props) {
    const {} = props

    return (
        <>
        <div className='bg-white shadow-md rounded-lg flex items-center p-4 mb-4'>
            <img src="src/assets/tomato.png" alt="" className='w-16 h-16 rounded mr-6' />
            <div className='flex-1'>
            <h1 className='text-lg text-custom-font-primary font-inika font-bold'>Tomato</h1>
            <div className="text-sm">
            <div className='flex'>
                <p className="text-custom-font-primary font-inika mr-1">Catagory: </p>
                <p className='text-custom-font-primary font-inika font-semibold'>Plant</p>
            </div>
            <div className='flex'>
                <p className='text-custom-font-primary font-inika mr-1'>Location</p>
                <p className='text-custom-font-primary font-inika font-semibold'>Solna</p>
            </div>
            </div>
            </div>
            <div className="ml-4 text-center text-sm">
            <p className="text-sm  text-custom-font-primary font-inika">Qty</p>
            <p className="text-lg font-semibold text-custom-font-primary font-inika">3</p>
            </div>

        </div>
        </>
    )
}

export default ListingCard
