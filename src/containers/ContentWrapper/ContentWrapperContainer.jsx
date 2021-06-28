import React from 'react';
import { NotFound, Loader } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as resultReducer from 'reducers/results/results';

const ContentWrapperContainer = ({ children }) => {
    const dispatch = useDispatch();
    const resultsStore = useSelector((state) => state.results);
    const { loading, content } = resultsStore;
    const { resetStore } = bindActionCreators({ ...resultReducer }, dispatch);
    return (
        <Loader isLoading={loading}>
            <NotFound content={content} resetStore={resetStore}>
                {children}
            </NotFound>
        </Loader>
    );
};

export default ContentWrapperContainer;