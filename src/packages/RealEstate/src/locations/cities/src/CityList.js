import React, { Component, useState, useEffect } from 'react';
import Resource from '../../../../../Core/Components/Resource';
import DataList from '../../../../../Core/Components/DataList';
import * as constants from './../constants';
import ToolBar from '../../../../../Core/Components/ToolBar';

const CityList = () => {
  return (
    <div id='main'>
      <ToolBar breadcrumbs={constants.BREADCRUMB_CITY} toolbar={constants.TOOLBAR} />
      <Resource
        path={constants.API_CITY}
        render={data => {
          if (data.loading) return <p> Loading cities ... </p>;
          if (data.payload.data != undefined) {
            return (
              <DataList
                data={data.payload.data}
                actions={constants.ACTIONS}
                columns={constants.COLUMNS}
              />
            );
          }
          return <div>No Data Found</div>;
        }}
      />
    </div>
  );
};

export default CityList;
