import React from 'react'

type Props = {
    image: string;
    name: string;
    category: string;
    location: string;
    quantity: number;
}

const ListingCard = ({ image, name, category, location, quantity }: Props) => {
    return (
        <>
        <div className='bg-white shadow-md rounded-lg flex items-center p-4 mb-4'>
            <img src={image} alt="" className='w-16 h-16 rounded mr-6' />
            <div className='flex-1'>
            <h1 className='text-lg text-custom-font-primary font-inika font-bold'>{name}</h1>
            <div className="text-sm">
            <div className='flex'>
                <p className="text-custom-font-primary font-inika mr-1">Catagory: </p>
                <p className='text-custom-font-primary font-inika font-semibold'>{category}</p>
            </div>
            <div className='flex'>
                <p className='text-custom-font-primary font-inika mr-1'>Location</p>
                <p className='text-custom-font-primary font-inika font-semibold'>{location}</p>
            </div>
            </div>
            </div>
            <div className="ml-4 text-center text-sm">
            <p className="text-sm  text-custom-font-primary font-inika">Qty</p>
            <p className="text-lg font-semibold text-custom-font-primary font-inika">{quantity}</p>
            </div>
        </div>
        </>
    )
}

export default ListingCard
