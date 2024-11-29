import React from "react"

interface ComponentProps {
  headers: string[];
  data: { [key: string]: any }[];
}

export const SimpleTable: React.FC<ComponentProps> = ({ headers, data }) => {
  return (
    <table className="w-full text-left">
      <thead className="bg-gray-200 text-gray-800">
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              scope="col"
              className="px-6 py-3.5 font-medium"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="border-b bg-white last:border-0"
          >
            {headers.map((header, colIndex) => (
              <td
                key={colIndex}
                className="whitespace-nowrap px-6 py-4"
              >
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};