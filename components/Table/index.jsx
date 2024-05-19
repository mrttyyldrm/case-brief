import React, { useEffect, useState } from "react";
import Button from "../Button";

function Table(props) {
  const pageLength = 5;
  const [pageCount, setPageCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState(
    props.datas.slice(0, pageLength)
  );

  useEffect(() => {
    const offset = (currentPage - 1) * pageLength;
    setPaginatedData(props.datas.slice(offset, offset + pageLength));
  }, [currentPage, props.datas]);

  useEffect(() => {
    setPageCount(Math.ceil(props.datas.length / pageLength));
  }, [props.datas]);

  return (
    <>
      <table>
        <thead>
          <tr>
            {props.heads.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((data, index) => (
            <tr key={index}>
              <td>
                <img src={data.avatar} />
              </td>
              <td>{data.fullname}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td roleid={data.role.id}>{data.role.text}</td>
              <td>
                <Button
                  icon="fa-solid fa-pen"
                  type="secondary icon"
                  onClick={() => props.onEditUserHandler(data)}
                />
                <Button
                  icon="fa-solid fa-trash-can"
                  type="error icon"
                  onClick={() => props.onRemoveUserHandler(data.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
        {props.datas.length > 0 && (
          <div id="table-pagination">
            <Button
              icon="fa-solid fa-angle-left"
              type={`icon small ${currentPage === 1 ? "passive" : ""}`}
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            />
            <ul id="pagination-pages">
              {Array.from({ length: pageCount }, (_, index) => (
                <li
                  className={currentPage === index + 1 && "active"}
                  key={index}
                  onClick={() => {
                    currentPage !== index + 1 && setCurrentPage(index + 1);
                  }}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
            <Button
              icon="fa-solid fa-angle-right"
              type={`icon small ${currentPage === pageCount ? "passive" : ""}`}
              onClick={() =>
                currentPage < pageCount && setCurrentPage(currentPage + 1)
              }
            />
          </div>
        )}
      </table>
    </>
  );
}

export default Table;
