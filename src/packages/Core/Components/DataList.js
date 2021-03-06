import React, { useState } from 'react';
import Pagination from './Pagination';
import { LinkAction, AnchorAction } from './ActionItems';
import { generatePath } from 'react-router';
import { apiService, alertService } from '../../Core';

const DataList = (props) => {
  const { data, component: Component, actions, columns } = props;
  const handleDelete = (e, params) => {
    e.preventDefault();
    const path = params.url + params.id;
    const response = apiService.delete(path);
    const status = alertService.delete(response);
  }
  return (
    <div className="row">
      <div className="col s12">
        <div className="container-fluid">
          <div className="card">
            <div className="card-content">
              <table className="table data-table">
                <thead>
                  <tr>
                    {columns.map(function (column, index) {
                      return <th key={index}>{column.display}</th>;
                    })}
                    <th className="text-nowrap center-align">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Component
                    ? data.map(function (row, index) {
                      return <Component key={index} row={row} actions={actions} />;
                    })
                    : data.map(function (row, index) {
                      return (
                        <tr key={index}>
                          {columns.map(function (column, colindex) {
                            return <td key={colindex}>{row[column.key]}</td>;
                          })}
                          <td className="text right-align">
                            {actions.map(function (action, index) {
                              {
                                return !action.callback ? (
                                  <LinkAction
                                    key={index}
                                    // TODO: temporary fix; generatePath function will be removed later
                                    url={generatePath(action.url, { id: row.id })}
                                    params={{ id: row.id }}
                                    id={row.id}
                                    classname={action.classname}
                                  />
                                ) : (
                                    <AnchorAction
                                      key={index}
                                      url={action.url}
                                      id={row.id}
                                      callback={handleDelete}
                                      classname={action.classname}
                                    />
                                  );
                              }
                            })}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default DataList;
