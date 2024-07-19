import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import EditList from '../componenets/editList';


const EditListPage = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="lg:mt-20 md:mt-20">
        <div className="lg:px-12 lg:py-8 px-6 py-4">
          <div className="w-full flex items-center mb-6">
            <button 
              className="mr-6"
              onClick={() => navigate(-1)}
            >
              <Icon icon="weui:back-outlined" />
            </button>
            <h1 className="text-custom-font-primary font-inika text-lg">
              Edit your listings
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="w-full max-w-3xl bg-white p-10 shadow-lg rounded-lg">
              <EditList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditListPage;
