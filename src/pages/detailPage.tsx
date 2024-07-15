import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const items = [
    { id: 1, name: 'Tomato', category: 'Plant', location: 'Solna', quantity: 2, image: '../src/assets/tomato.png' },
    { id: 2, name: 'Basil', category: 'Plant', location: 'Stadshagen', quantity: 1, image: '../src/assets/basil.png' },
    { id: 3, name: 'Rose', category: 'Plant', location: 'Stadshagen', quantity: 1, image: '../src/assets/rose.png' },
    { id: 4, name: 'Basil', category: 'Plant', location: 'Stadshagen', quantity: 1, image: '../src/assets/basil.png' },
];

function DetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const item = items.find((item) => item.id === parseInt(id));

    return (
        <div className="min-h-screen px-6 py-4">
            <h1 className="text-custom-font-primary font-inika mb-6 text-lg">My listings</h1>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h2 className="text-xl font-bold">{item?.name}</h2>
                <div className="flex justify-center items-center">
                    <img src={item?.image} alt={item?.name} className="w-40 h-full object-cover rounded m-4" />
                </div>
                <div className='ml-4'>
                    <p className=" text-custom-font-primary font-inika text-lg">Category: {item?.category}</p>
                    <p className=" text-custom-font-primary font-inika text-lg">Location: {item?.location}</p>
                    <p className=" text-custom-font-primary font-inika text-lg">Qty: {item?.quantity}</p>
                </div>
                <div>
                    <button 
                    className="bg-custom-btn-primary text-custom-btn-txt py-2 px-10 rounded-lg text-sm mt-4 mb-2 font-inika font-semibold"
                    onClick={() => navigate('/edit')}>
                        Edit
                        </button>
               
                </div>
                <div>
                    <button className="font-inika text-custom-btn-txt py-2 px-12 rounded-lg mt-2 font-bold text-xl bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;

