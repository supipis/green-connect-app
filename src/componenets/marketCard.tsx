type Props = {
    image: string;
    name: string;
    category: string;
    location: string;
    quantity: number;
}

const MarketCards = ({ image, name, category, location, quantity }: Props) => {
    return (
        <div className='bg-white shadow-md rounded-lg py-4 px-2 mb-4 flex items-center'>
            <img src={image} alt={name} className='w-14 h-14 rounded mr-2' />
            <div className='flex-1'>
                <h1 className='text-lg text-custom-font-primary font-inika font-bold'>{name}</h1>
                <div className='flex'>
                    <p className="text-custom-font-primary font-inika mr-1 text-sm">Category: </p>
                    <p className='text-custom-font-primary font-inika font-semibold text-sm'>{category}</p>
                </div>
                <div className='flex'>
                    <p className='text-custom-font-primary font-inika mr-1 text-sm'>Location: </p>
                    <p className='text-custom-font-primary font-inika font-semibold text-sm'>{location}</p>
                </div>
                <div className='flex'>
                    <p className="text-custom-font-primary font-inika mr-1 text-sm">Quantity: </p>
                    <p className='text-custom-font-primary font-inika font-semibold text-sm'>{quantity}</p>
                </div>
            </div>
            <div className="ml-4">
                <button className="bg-custom-btn-primary text-custom-btn-txt py-2 px-2 rounded-lg text-sm">Contact</button>
            </div>
        </div>
    )
}

export default MarketCards
