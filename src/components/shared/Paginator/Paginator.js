import React from "react";
import style from "./Paginator.module.scss";

const Paginator = ({ currentPage, onPageChange }) => {
  return (
    <div className={style.paginatorWrapper}>
      <span>
        Page <span className={style.page}>{currentPage}</span>
      </span>
      <div className={style.buttonsWrapper}>
        {currentPage > 1 && (
          <button
            className={style.button}
            onClick={() => onPageChange(--currentPage)}
          >
            PREVIOUS
          </button>
        )}

        <button
          className={style.button}
          onClick={() => onPageChange(++currentPage)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Paginator;
