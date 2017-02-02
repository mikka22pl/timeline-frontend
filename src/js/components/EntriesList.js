import React, { PropTypes } from 'react';

import Entry from './entry';

class EntriesList extends React.Component {

  render() {
    const { entries } = this.props;
    const list = entries.map((item, idx) => <Entry key={idx} id={idx} {...item} />);
    return (
      <table class="table table-condensed">
        <thead>
          <tr>
            <th>Num</th>
            <th>Category</th>
            <th>Title</th>
            <th>Tags</th>
            <th>Date</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
        {list}
        </tbody>
      </table>
    );
  }
}

EntriesList.propTypes = {
  entries: PropTypes.array
}
export default EntriesList;
