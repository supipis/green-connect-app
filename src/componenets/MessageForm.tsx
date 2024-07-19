import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../auth/api';

export const MessageForm = ({listingId}) => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!message.trim()) {
        alert('Please enter a message');
        return;
      }
  
      try { 

        const requestData = {
            listingId,
            content: message,
          }

       
        const response = await api.post('/api/message-threads', requestData);
  
        console.log('Message sent successfully:', response.data);
        setMessage(''); 
        alert('Message sent!');
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again.');
      }
    };
  
    return (
      <div className='mt-6'>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="message" className="block text-custom-font-primary font-inika text-lg">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 text-custom-font-primary font-inika p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary h-60 resize-none" // Set appropriate height for tip content
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-2 font-bold text-xl font-inika"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    );
  };

  export default MessageForm