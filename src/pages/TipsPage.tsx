import { useNavigate } from "react-router-dom";
import TipCards from "../componenets/tipCards";
import api from "../auth/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const fetchPosts = async () => {
  const response = await api.get("/api/posts");
  return response.data;
};

const Tips = () => {
  const navigate = useNavigate();
  
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  useEffect(() => {
    refetch();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

   

  return (
    <div className="h-full w-full lg:mt-20 md:mt-20">
      <div className="px-6 py-4 lg:px-12 lg:py-8">
        <h1 className="text-custom-font-primary font-inika mb-6 text-lg ">
          Let's grow together
        </h1>
        {data.length === 0 ? (
          <div className="text-center mt-10">
            <p className="text-lg text-gray-700">
              No announcements/tips so far. Do you have anything to share?
            </p>
          </div>
        ) : (
          data.map((post, index) => (
            <TipCards
              key={index}
              tip={post.message}
              postedBy={post.author ? (post.author.username ? post.author.username : "x") : "y"}
              postedOn={new Date(post.postedOn).toLocaleDateString()}
            />
          ))
        )}
      </div>
      <div className="text-center">
        <button
          className="bg-custom-btn-primary font-inika text-custom-btn-txt py-3 px-12 rounded-lg mt-2 font-bold text-xl"
          onClick={() => navigate("/post")}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Tips;
