import { comments } from "../../data/comments";

export default function CommentDetails({ comment }) {
  return (
    <>
      <h1>Comment Details</h1>
      <h1>
        {comment.id} {comment.text}
      </h1>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  return {
    props: {
      comment,
    },
  };
}
