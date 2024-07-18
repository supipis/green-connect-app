import { Icon } from '@iconify/react/dist/iconify.js'
import { useNavigate, useParams } from 'react-router-dom';
import MessageForm from '../componenets/MessageForm';

const MessagePage = () => {
    const navigate = useNavigate();

    const {listingId} = useParams();
    
    return (
        <div className="h-full w-full lg:mt-20 md:mt-20">
      <div className="px-6 py-4 lg:px-12 lg:py-8">
      <div className="flex">
        <button 
          className="mr-6"
          onClick={() => navigate(-1)}
        >
          <Icon icon="weui:back-outlined" />
        </button>
        <h1 className="text-custom-font-primary font-inika text-lg ">
          Contact 
        </h1>
       
      </div>
      <MessageForm listingId={listingId} />
        </div>
        </div>
    )
}

export default MessagePage
