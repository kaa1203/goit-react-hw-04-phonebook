import PropTypes from "prop-types";
import css from "./Section.module.css"

export const Section = ({ children, title }) => {
   return(
      <section className={css.section}>
         <h2 className={css.sectionTitle}>{title}</h2>
         {children}
      </section>

   );
}

Section.propTypes = {
   children: PropTypes.node.isRequired,
   title: PropTypes.string.isRequired,
}