import { ChatIcon } from "@heroicons/react/outline";
import { Comment as iComment } from "../../util/boardInterface";
import dateFormatter from "../../util/dateFormatter";

interface iProps {
  comments: iComment[] | undefined;
}

const Comments = ({ comments }: iProps) => {
  return (
    <>
      <div className="flex space-x-3 items-center">
        <ChatIcon className="w-6" />
        <p className="text-lg font-medium">Comments</p>
      </div>
      {comments?.map((comment, index) => {
        return (
          <article key={index} className="flex items-start space-x-2">
            <img
              src={comment.image}
              alt={comment.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center space-x-2">
                <p className="font-medium">{comment.name}</p>
                <p className="text-sm text-gray-600">
                  {dateFormatter(comment.date)}
                </p>
              </div>
              <p className="">{comment.comment}</p>
            </div>
          </article>
        );
      })}
      <textarea
        rows={2}
        className="w-full px-4 py-4 rounded-lg bg-gray-100"
        placeholder="Add a comment..."
      />
    </>
  );
};

export default Comments;
