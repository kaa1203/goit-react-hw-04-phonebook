import PropTypes from "prop-types";
import css from "./Filter.module.css";

export const Filter = ({ filter, filterValue }) => {
   const handleOnChange = e => {
      filterValue(e.target.value);
   }

   return(
      <div className={css.filterWrapper}>
         <input
            className={css.filterInput}
            type="text"
            name="searchBar"
            placeholder="Search here..."
            value={filter}
            onChange={handleOnChange}
         />
      </div>
   );
}

Filter.propTypes = {
   filter: PropTypes.string.isRequired,
   filterValue: PropTypes.func.isRequired
}