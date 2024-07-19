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
    const fileName = image.split('/').pop();
    const imageUrl = `http://localhost:8080/api/listings/images/${fileName}`;
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/details/${id}`);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer flex items-center lg:flex-col lg:items-center mb-4"
             onClick={handleCardClick}>
            <img src={imageUrl} alt={name} className="w-16 h-16 lg:w-40 lg:h-40 rounded mb-4 lg:mb-0 lg:mt-4" />
            <div className="ml-4 lg:ml-0">
                <h1 className="text-lg text-custom-font-primary font-inika font-bold mb-2">{name}</h1>
                <div className="text-sm">
                    <p className="text-custom-font-primary font-inika">Category: <span className="font-semibold">{category}</span></p>
                    <p className="text-custom-font-primary font-inika">Location: <span className="font-semibold">{location}</span></p>
                    <p className="text-custom-font-primary font-inika">Qty: <span className="font-semibold">{quantity}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
