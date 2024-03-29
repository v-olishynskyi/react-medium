import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../UI/Loader/Loader";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const PopularTags = () => {
  const [{ response, isLoading, error }, doFetch] = useFetch("/tags");

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  if (isLoading || !response) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div className="sidebar">
      <p>Popular tags</p>
      <div className="tag-list">
        {response.tags.map(tag => (
          <Link to={`/tags/${tag}`} className="tag-default tag-pill" key={tag}>
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
