export default function news({ articles, category }) {
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>{" "}
      </h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h1>
              {article.id} {article.title}
            </h1>
            <p>{article.desc}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Alfred"]);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
