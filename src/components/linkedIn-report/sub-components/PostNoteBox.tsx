import { FC } from "react";

interface PostNoteBoxProps {
  categoryText?: string;
  noteText?: string;
}

const PostNoteBox: FC<PostNoteBoxProps> = ({ categoryText, noteText }) => {
  return (
    <div className="space-y-2 -mt-4 mb-8">
      {categoryText && (
        <div className="bg-primary-light/40 text-base rounded-md px-4 py-2">
          <span className="text-text-primary">
            {categoryText === "Thought Leadership"
              ? "Bonus Category:"
              : "Post Category:"}{" "}
          </span>
          <span className="text-primary font-medium">{categoryText}</span>
        </div>
      )}

      {noteText && (
        <div className="bg-yellow-100 text-yellow-900 italic text-xs px-4 py-2 rounded-md">
          <span className="font-semibold">Note -</span> {noteText}
        </div>
      )}
    </div>
  );
};

export default PostNoteBox;
