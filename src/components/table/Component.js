import React from "react";

class Table extends React.Component {
  renderTableHead() {
    const { tableHead } = this.props;
    return tableHead.map((item, key) => {
      return (
        <th scope="col" key={key}>
          {item}
        </th>
      );
    });
  }

  renderTableColumns(rows, key) {
    return rows.map((item, itemKey) => {
      return <td key={`tb-column-${key}-${itemKey}`}>{item}</td>;
    });
  }

  renderTableRows() {
    const { tableBody } = this.props;
    return tableBody.map((item, key) => {
      return (
        <tr key={`tb-row-${key}`}>{this.renderTableColumns(item, key)}</tr>
      );
    });
  }

  render() {
    const tableHead = this.renderTableHead();
    const tableBody = this.renderTableRows();
    return (
      <table className="table w100p">
        <thead>
          <tr>{tableHead}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    );
  }
}

export default Table;
