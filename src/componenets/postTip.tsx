import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../auth/api";

const PostTip = () => { 
  const [tip, setTip] = useState("");
  const navigate = useNavigate();

  const createTipMutation = useMutation({
    mutationFn: async (tipData) => {
      const response = await api.post("/api/posts", tipData);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Tip posted successfully:", data);
      setTip("");
      toast.success("Tip posted successfully!");
      navigate("/tips");
    },
    onError: (error) => {
      console.error("Error creating tip:", error);
      toast.error("Failed to post tip. Please try again.");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tip.trim()) {
      toast.error("Please enter a tip");
      return;
    }
    try {
      await createTipMutation.mutate({ message: tip });
      console.log("Tip posted successfully!");
    } catch (error) {
      console.error("Error creating tip:", error);
      toast.error("Failed to post tip. Please try again.");
    }
  };

  return (
    <div className="mt-6">
      <div className="">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="tip" className="block text-custom-font-primary font-inika text-lg">
              Your Tip
            </label>
            <textarea
              id="tip"
              placeholder="Write your tip here"
              name="tip"
              value={tip}
              onChange={(e) => setTip(e.target.value)}
              className="mt-1 text-custom-font-primary font-inika p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary h-60 resize-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-2 font-bold text-xl font-inika"
              disabled={createTipMutation.isLoading}
            >
              {createTipMutation.isLoading ? "Posting..." : "Post Tip"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostTip;
