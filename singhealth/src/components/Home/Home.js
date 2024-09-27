import React, { useMemo } from "react";
import { useRowSelect, useTable } from "react-table";
import ReactDOM from "react-dom";
import "./Home.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import auditCheck from "../AuditCheck/auditCheck";

function createData(name) {
  return { name };
}

const rows = [
  createData("A Hawker"),
  createData("B Restaurant"),
  createData("C Flower Shop"),
  createData("D Bakery"),
  createData("E Mama Shop"),
];

function Home() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => TenantData, []);

  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <>
      <h1>HOME</h1>
      <h4>View your upcoming tasks and recent activities.</h4>
      <h2>UPCOMING AUDITS</h2>
      <table>
        <tbody>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </tbody>
      </table>
      <Router>
        <Route path="/auditChecklist" component={auditCheck} />
      </Router>
    </>
  );
}

export default Home;

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  document.getElementById("root")
);
