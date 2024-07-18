import { Icon } from "@iconify/react/dist/iconify.js";
import PostTip from "../componenets/postTip";
import { useNavigate } from "react-router-dom";

const PostTipPage = () => {
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
          Post a tip
        </h1>
        </div>
        <PostTip />
      </div>
      <div className="text-center">
        <button className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-2 font-bold text-xl font-inika">
          Edit
        </button>
      </div>
    </div>
  );
};

export default PostTipPage;
