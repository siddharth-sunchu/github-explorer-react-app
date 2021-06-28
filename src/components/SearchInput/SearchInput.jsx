import React from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';
import { HistoryIcon } from '@primer/octicons-react';

const SearchInput = ({ recentSearch, clearRecentSuggestion, children, ...rest }) => {

  const recentSuggestionTag = [{ label: <h6 className="lead" >{'Recent Searches'}</h6>, disabled: true }];
  const clearTag = [{ label: <span className="card-subtitle mb-2 text-muted" onClick={clearRecentSuggestion} >{'Clear Recent Searches'}</span>, null: null }];

  let recentSearchValues = Object.values(recentSearch).map((eachValue) => {
    return { ...eachValue, label: <span><span style={{  marginRight: '10px' }} ><HistoryIcon size={16} /></span>{eachValue.value}</span>}
  });
  
  const options = (recentSearchValues.length > 0) ? [...recentSuggestionTag, ...recentSearchValues, ...clearTag] : []
  const filterOptions = (inputValue, option) => {
    if(option.value) {
        return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  };
  return (
    <div>
      <AutoComplete
        allowClear={true}
        style={{
          width: '250px'
        }}
        options={options}
        placeholder="Search for a Github repos"
        {...rest}
        filterOption={filterOptions}
      />
      {children}
    </div>
  );
};

SearchInput.propTypes = {
  children: PropTypes.node,
  recentSearch: PropTypes.object,
  clearRecentSuggestion: PropTypes.func,
  
};

export default SearchInput;
