import * as x from "@stylexjs/stylex";

const styles = x.create({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "10px",
  },
  page: {
    padding: "4px",
  },
});

interface Props {
  page: number;
  setPage: (page: number | ((prev: number) => number)) => void;
  maxPage: number;
}
export const Pagination = ({ page, setPage, maxPage }: Props) => {
  return (
    <div {...x.props(styles.wrapper)}>
      <button onClick={() => setPage(1)} disabled={page === 1}>
        {"<<"}
      </button>
      <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
        {"<"}
      </button>
      <span {...x.props(styles.page)}>{page}</span>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === maxPage}
      >
        {">"}
      </button>
      <button onClick={() => setPage(maxPage)} disabled={page === maxPage}>
        {">>"}
      </button>
    </div>
  );
};
