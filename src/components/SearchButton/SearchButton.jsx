import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = ({ title, onClick, disabled }) => {
  return (
    <span className="input-group-btn" style={{ marginLeft: '20px'}}>
      <button type="submit" className="btn btn-secondary"  onClick={onClick} disabled={disabled}>
        {title}
      </button>
    </span>
  );
};

SearchButton.defaultProps = {
    title: 'Search'
};

SearchButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default SearchButton;
