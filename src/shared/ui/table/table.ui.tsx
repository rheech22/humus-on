import * as x from "@stylexjs/stylex";
import { color } from "../../styles/tokens.stylex";

const styles = x.create({
  wrapper: {
    width: "100%",
    borderCollapse: "collapse",
  },
  header: {
    borderTop: "2px solid black",
    backgroundColor: color.gray,
  },
  cell: {
    textAlign: "center",
    borderBottom: "1px solid rgb(160 160 160)",
    padding: "8px",
  },
});

interface Props {
  cols: string[];
  rows: (string | number)[][];
}
export const Table = ({ cols, rows }: Props) => {
  return (
    <table {...x.props(styles.wrapper)}>
      <thead>
        <tr {...x.props(styles.header)}>
          {cols.map((col) => (
            <th {...x.props(styles.cell)} key={col}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row[0]}>
              {row.map((cell) => (
                <td {...x.props(styles.cell)} key={cell}>
                  {cell}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
