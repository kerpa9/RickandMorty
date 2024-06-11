import "../components/Style/pagination.css";
const Pagination = ({ setPage, page, total }) => {
  const handleMax = () => {
    if (page < total) {
      setPage(page + 1);
    }
  };
  const handleMin = () => {
    if (page < 2) {
      console.log("error");
    } else {
      setPage(page - 1);
    }
  };

  return (
    <div className="contain_btn">
      <button className="btn" onClick={handleMin}>
        Min
      </button>
      <span>
        {page}... {total}
      </span>
      <button className="btn" onClick={handleMax}>
        Max
      </button>
    </div>
  );
};

export default Pagination;
