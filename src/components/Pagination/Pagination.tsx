interface Pagination {
  number: number;
  arrayPagination: [];
  getPageNumber: (searchValue: string) => void;
}

function Pagination(props: Pagination): JSX.Element {
  const arrayPagination = [];
  for (let i = 1; i <= props.number; i++) {
    arrayPagination.push(i);
  }
  console.log(arrayPagination);

  async function handler(event: { target: { id: string } }) {
    console.log(event.target.id);
    await props.getPageNumber(event.target.id);
  }

  return (
    <>
      <div className="pagination">
        {arrayPagination.map((item) => (
          <div
            onClick={handler}
            className="pagination-item"
            key={item}
            id={`?page=${item}`}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default Pagination;
