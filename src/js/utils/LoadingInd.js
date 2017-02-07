import React, { PropTypes } from 'react';

class LoadingInd extends React.Component {

  render() {
    return (
      <span>
        {this.props.show && <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>}
        {this.props.show && <span class="sr-only">Loading...</span>}
      </span>
    )
  }
}
LoadingInd.defaultProps = {
  show: false
};
LoadingInd.propTypes = {
  show: PropTypes.bool
};
export default LoadingInd;
