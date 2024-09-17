import { useSearchParams } from "react-router-dom";

export default function SearchMovie() {
  const [params, setParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    params.set("query",  event.target.elements.query.value);
    
    setParams(params);

    event.target.reset();
  };
  return (
     <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search for movies"
        />
        <button type="submit" >
          Search
        </button>
      </form>
  )
}