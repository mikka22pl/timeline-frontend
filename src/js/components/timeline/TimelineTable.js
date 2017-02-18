import React, { PropTypes } from 'react';

class TimelineTable extends React.Component {

  render() {
    const rows = this.props.data.map((item) => <tr key={item.id}><td>{item.name}</td></tr>)
    return (
      <div>
        <table class="table table-condensed">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
        </table>
      </div>
    );
  }
}
TimelineTable.propTypes = {
  data: PropTypes.array
};
export default TimelineTable;
