type Props = {
    image: string;
    name: string;
    category: string;
    location: string;
    quantity: number;
}

const MarketCards = ({ image, name, category, location, quantity }: Props) => {
    return (
        <div className='bg-white shadow-md rounded-lg py-4 px-2 mb-4 sm:flex items-center lg:flex-row lg:justify-center lg:text-center md:block'>
            <div className="lg:flex lg:justify-center md:flex md:justify-center">
            <img src={image} alt={name} className='w-14 h-14 rounded mr-2 md:w-32 md:h-32 lg:w-32 lg:h-32 lg:mb-4 md:mb-4' />

            </div>
            <div className='sm:flex-1 md:text-center'>
                <h1 className='text-lg text-custom-font-primary font-inika font-bold'>{name}</h1>
                <div className="text-sm">
                    <p className="text-custom-font-primary font-inika">Category: <span className="font-semibold">{category}</span></p>
                    <p className="text-custom-font-primary font-inika">Location: <span className="font-semibold">{location}</span></p>
                    <p className="text-custom-font-primary font-inika">Qty: <span className="font-semibold">{quantity}</span></p>
                </div>
            </div>
            <div className="sm:ml-4 lg:flex lg:justify-center md:flex md:justify-center">
                <button className="bg-custom-btn-primary text-custom-btn-txt py-2 px-2 rounded-lg text-sm font-inika lg:mt-4 md:mt-4">Contact</button>
            </div>
        </div>


        
    )
}

export default MarketCards
