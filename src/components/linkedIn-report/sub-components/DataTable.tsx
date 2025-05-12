import React from "react";

export interface Column<T> {
  key: keyof T;
  header: string;
  className?: string;
  render?: (value: any, row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  caption?: string;
}

const DataTable = <T,>({ columns, data, caption }: DataTableProps<T>) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-sm border">
      <table className="min-w-full table-auto text-left text-sm text-gray-800">
        {caption && (
          <caption className="caption-top p-4 text-left text-base font-semibold text-primary">
            {caption}
          </caption>
        )}
        <thead className="bg-primary-light/20 text-primary text-sm font-semibold align-baseline">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key as string}
                className={`p-3 ${col.className || ""}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="align-baseline">
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-b even:bg-muted/40 last:border-none"
            >
              {columns.map((col) => (
                <td
                  key={col.key as string}
                  className={`p-3 ${col.className || ""}`}
                >
                  <>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
