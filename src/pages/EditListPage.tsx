import { Icon } from "@iconify/react/dist/iconify.js";
import EditList from "../componenets/editList";
import { useNavigate } from "react-router-dom";

const EditListPage = () => {
    const navigate = useNavigate();
  return (
    <div className="h-full w-full lg:mt-20 md:mt-20">
      <div className="lg:px-12 lg:py-8 px-6 py-4">
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
    </div>
  );
};

export default EditListPage;
