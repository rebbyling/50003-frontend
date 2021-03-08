export const COLUMNS = [
  {
    Header: "Tenant Shop",
    accessor: "Tenant Shop",
    Cell: (e) => <a href={e.value}> {e.value} </a>,
  },
  {
    Header: "Auditor",
    accessor: "Auditor",
  },
  {
    Header: "Date",
    accessor: "Date",
  },
  {
    Header: "Done",
    accessor: "Complete",
  },
];
//NOTE that if we do not include the column header inside here, it wont be rendered into the UI
