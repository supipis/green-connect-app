import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const LogoutPage = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
  
    const handleLogout = () => {
      toast((t) => (
        <span>
          Are you sure you want to logout?
          <button
            className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
            onClick={() => {
              logout(); 
              toast.dismiss(t.id);
              navigate('/login'); 
            }}
          >
            Yes
          </button>
          <button
            className="ml-2 px-2 py-1 bg-gray-300 text-black rounded"
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </button>
        </span>
      ), {
        duration: 5000,
        position: 'top-center',
      });
    };
  
    return (
      <div className="h-screen flex items-center justify-center">
        <Toaster />
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    );
  };
  
  export default LogoutPage;
  