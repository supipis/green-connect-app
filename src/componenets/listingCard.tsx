import { useNavigate } from 'react-router-dom';

type Props = {
    id: number;
    image: string;
    name: string;
    category: string;
    location: string;
    quantity: number;
}

const ListingCard = ({ id, image, name, category, location, quantity }: Props) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/details/${id}`);
    };
    
    return (
        <>
        <div className='bg-white shadow-md rounded-lg flex items-center p-4 mb-4 cursor-pointer gap-10'
        onClick={handleCardClick}
        >
            <div>
            <img src={image} alt="name" className='w-16 h-16 rounded ' />
            </div>
            
            <div className=''>
            <h1 className='text-lg text-custom-font-primary font-inika font-bold mb-2'>{name}</h1>
            <div className="text-sm mb-2">
                <p className='text-custom-font-primary font-inika'>Category: <span className='font-semibold'>{category}</span></p>
                <p className='text-custom-font-primary font-inika'>Location: <span className='font-semibold'>{location}</span></p>
                <p className="text-custom-font-primary font-inika">Qty: <span className='font-semibold'>{quantity}</span></p>
            </div>
            </div>
        </div>
        </>
    )
}

export default ListingCard
