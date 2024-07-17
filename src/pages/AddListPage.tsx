import { useNavigate } from "react-router-dom";
import AddForm from "../componenets/addForm";
import { Icon } from "@iconify/react/dist/iconify.js";

const AddListPage = () => {
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
          Add to your list
        </h1>
        </div>
      
        <AddForm />
      </div>
    </div>
  );
};

export default AddListPage;
