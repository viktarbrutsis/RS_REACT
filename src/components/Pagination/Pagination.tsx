interface Pagination {
  number: number;
  arrayPagination: [];
}

function Pagination(props: Pagination): JSX.Element {
  const arrayPagination = [];
  for (let i = 1; i <= props.number; i++) {
    arrayPagination.push(i);
  }
  console.log(arrayPagination);
  return (
    <>
      <div className="pagination">
        {arrayPagination.map((item) => (
          <div className="pagination-item" key={item} id={`page=${item}`}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default Pagination;
