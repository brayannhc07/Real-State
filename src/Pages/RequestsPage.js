import React, { Fragment } from 'react';
import { RequestsSearch } from '../Components';

const RequestsPage = props => {
  return (
    <Fragment>
      <main className="section container mid-container">
        <RequestsSearch />
      </main>
    </Fragment>
  );
};

export default RequestsPage;
