import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash'

import { format } from '../utils/DateTimeUtils';
import TagsList from '../components/TagsList';

class Entry extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { id, link, name, descr, category, tags, onDate } = this.props;

    return (
      <tr>
        <th>{id}</th>
        <td>{category.name}</td>
        <td>{name}</td>
        <td><TagsList tags={tags} /></td>
        <td class="text-nowrap">{format(onDate)}</td>
        <td><a href={link}>link</a></td>
        <td><Link to={`/article/form/${id}`}>edit</Link></td>
      </tr>
    );
  }
}

Entry.propTypes = {
  id: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  descr: PropTypes.string,
  category: PropTypes.shape({
    name: PropTypes.string
  }),
  tags: PropTypes.array.isRequired,
  onDate: PropTypes.any
};

export default Entry;
