import { useSearchParams } from "react-router-dom";

import css from './Searchmovie.module.css'

export default function SearchMovie() {
  const [params, setParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    params.set("query",  event.target.elements.query.value);
    
    setParams(params);

    event.target.reset();
  };
  return (
     <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
          type="text"
          name="query"
          placeholder="Search for movies"
        />
        <button className={css.btn} type="submit" >
          Search
        </button>
      </form>
  )
}