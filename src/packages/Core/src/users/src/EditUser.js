import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ToolBar from '../../../Components/ToolBar';
import * as constants from './../constants';
import { UserContext } from '../../../';
import { apiService, alertService } from '../../../../Core';
import { EditResource } from '../../../../Core/Components/CRUD';

const UserEdit = props => {
  const { dispatch: pdispatch } = useContext(UserContext);
  const [toList, setToList] = useState(false);
  const [state, setState] = useState({
    id: '',
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
    contact: '',
    address: '',
    roles: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    M.AutoInit();
    setState({
      id: props.payload.id,
      first_name: props.payload.first_name,
      last_name: props.payload.last_name,
      user_name: props.payload.user_name,
      email: props.payload.email,
      contact: props.payload.contact,
      address: props.payload.address,
      roles: props.payload.roles,
      password: props.payload.password,
      password_confirmation: props.payload.password_confirmation,
    });
    M.updateTextFields();
  }, [props]);

  useEffect(() => {
    M.updateTextFields();
  });

  const handleSubmit = e => {
    event.preventDefault();
    const { id } = state;
    const response = apiService.update(constants.API_USER_UPDATE + id, state);
    const process = alertService.update(response);
    process.then(status => {
      if (status === true) {
        pdispatch({ type: 'RESET' });
        setTimeout(() => setToList(true), 500);
      }
    });
  };

  const setFieldValue = (field, value) => {
    setState({
      ...state,
      [field]: value,
    });
    pdispatch({ type: 'SET_FIELD', current_page: { field, value } });
  };

  return (
    <>
      {toList ? <Redirect to={constants.USER} /> : null}
      <div id="main">
        <ToolBar breadcrumbs={constants.BREADCRUMB_USER_CREATE} toolbar={constants.TOOLBAR} />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col s12">
              <div className="container-fluid edit--page">
                <div className="row">
                  <div className="col s12">
                    <ul className="tabs">
                      <li className="tab">
                        <a className="active" href="#pages">
                          Edit User
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col s12">
                    <div className="panel card tab--content">
                      <div id="users" className="col s12">
                        <div className="row">
                          <div className="input-field col s4">
                            <label>First Name</label>
                            <input
                              type="text"
                              name="first_name"
                              value={state.first_name}
                              onChange={e => setFieldValue('first_name', e.target.value)}
                            />
                          </div>
                          <div className="input-field col s4">
                            <input
                              type="text"
                              name="last_name"
                              value={state.last_name}
                              onChange={e => setFieldValue('last_name', e.target.value)}
                            />
                            <label>Last Name</label>
                          </div>
                          <div className="input-field col s4">
                            <input
                              type="text"
                              name="user_name"
                              value={state.user_name}
                              onChange={e => setFieldValue('user_name', e.target.value)}
                            />
                            <label>User name</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <label>Email</label>
                            <input
                              type="text"
                              name="email"
                              value={state.email}
                              onChange={e => setFieldValue('email', e.target.value)}
                            />
                          </div>
                          <div className="input-field col s6">
                            <input
                              type="text"
                              name="contact"
                              value={state.contact}
                              onChange={e => setFieldValue('contact', e.target.value)}
                            />
                            <label>Contact</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <label>Address</label>
                            <input
                              type="text"
                              name="address"
                              value={state.address}
                              onChange={e => setFieldValue('address', e.target.value)}
                            />
                          </div>
                          <div className="input-field col s6">
                            <select
                              name="roles"
                              defaultValue={toString(state.roles)}
                              onChange={e => setFieldValue('roles', e.target.value)}
                            >
                              <option value="" disabled>
                                Choose your option
                              </option>
                              <option value="1">Super Admin</option>
                              <option value="2">Admin</option>
                              <option value="3">Agent</option>
                            </select>
                            <label>Role</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <label>Password</label>
                            <input
                              type="password"
                              name="password"
                              value={state.password}
                              onChange={e => setFieldValue('password', e.target.value)}
                            />
                          </div>
                          <div className="input-field col s6">
                            <input
                              type="password"
                              name="password_confirmation"
                              value={state.password_confirmation}
                              onChange={e => setFieldValue('password_confirmation', e.target.value)}
                            />
                            <label>Password Confirmation</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12">
                            <div className="input-field">
                              <button
                                type="submit"
                                className="btn gradient-45deg-purple-deep-orange"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditResource(UserEdit, constants.API_USER_EDIT);
