interface Props {
  cols: string[];
  rows: string[][];
}

export const Table = ({ cols, rows }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          {cols.map((col) => (
            <th>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr>
              {row.map((cell) => (
                <td>{cell}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
