import React, { Component, useState } from 'react';
import Resource from '../../Core/Components/Resource';
import DataList from '../../Core/Components/DataList';
import PageRow from './PageRow';
import * as Constants from './../constants';

const PageList = () => {
  return (
    <Resource
      path={Constants.PAGE_URI}
      render={data => {
        if (data.loading) return <p> Loading pages ... </p>;
        if (data.payload.data != undefined) {
          return <DataList data={data.payload.data} component={PageRow} />;
        }
        return <div>No Data Found</div>;
      }}
    />
  );
};

export default PageList;