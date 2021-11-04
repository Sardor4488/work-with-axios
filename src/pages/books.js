import React, { useEffect, useState } from "react";
import { getPosts } from "../Api";

const Books = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const post = await getPosts(limit, page);
    setData(post);
    setLoading(false);
  }, [page]);

  const nextLoad = () => {
    setLoading(true);
    setPage(page + 1);
    if (page == 10) {
      setPage(1);
    }
  };
  const prevLoad = () => {
    setLoading(true);
    setPage(page - 1);
    if (page == 10) {
      setPage(1);
    }
  };
  const pagination = (i) => {
    setLoading(true);
    setPage(i);
  };
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((v, index) => (
          <div key={v.id}>
            <div className="d-flex">
              <p>{v.id} </p>
              <p className="ms-2 text-capitalize">{v.title}</p>
            </div>
          </div>
        ))
      )}

      <ul class="pagination">
        <li class="page-item" onClick={prevLoad}>
          <a class="page-link" href="#">
            Previous
          </a>
        </li>
        {data.map((v, i) => (
          <li class="page-item">
            <span
              class={`page-link ${page == i + 1 && "bg-primary text-white   "}`}
              onClick={() => pagination(i + 1)}
            >
              {i + 1}
            </span>
          </li>
        ))}
        <li class="page-item" onClick={nextLoad}>
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Books;
