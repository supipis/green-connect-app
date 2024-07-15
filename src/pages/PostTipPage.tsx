import PostTip from "../componenets/postTip";

const PostTipPage = () => {
  
  return (
    <div className="h-full w-full bg-custom-primary">
      <div className="px-6 py-4">
        <h1 className="text-custom-font-primary font-inika mb-6 text-lg ">
          Post a tip
        </h1>
        <PostTip />
      </div>
      <div className="text-center">
        <button
          className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-2 font-bold text-xl font-inika" 
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default PostTipPage;
