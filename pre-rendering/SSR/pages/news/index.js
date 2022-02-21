export default function productList({ news }) {
  return (
    <>
      <h1>List of News</h1>
      {news.map((more) => {
        return (
          <div key={more.id}>
            <h1>
              {more.id} {more.title} {more.category}{" "}
            </h1>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      news: data,
    },
  };
}
