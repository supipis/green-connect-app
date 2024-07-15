import { Icon } from "@iconify/react/dist/iconify.js";
import EditList from "../componenets/editList";
import { useNavigate } from "react-router-dom";

const EditListPage = () => {
    const navigate = useNavigate();
  return (
    <div className="h-full w-full">
      <div className="px-6 py-4">
      <div className="flex">
        <button 
          className="mr-6"
          onClick={() => navigate(-1)}
        ><Icon icon="weui:back-outlined" />
        </button>
        <h1 className="text-custom-font-primary font-inika text-lg ">
          My listings
        </h1>
        </div>
        <EditList />
      </div>
      <div className="text-center">
        <button className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-2 font-bold text-xl font-inika">
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditListPage;
