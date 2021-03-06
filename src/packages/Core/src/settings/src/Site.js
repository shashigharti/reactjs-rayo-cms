import React, { useEffect, useState } from 'react';
import * as constants from './../constants';
import Editor from './../../../../Core/Components/Editor';
import { apiService, alertService } from './../../../../Core';
import { SettingResource } from './../../../../Core/Components/CRUD';

const Site = props => {
  const [state, setState] = useState({
    slug: 'site',
    package_name: 'real-estate',
    display_name: 'Site',
    values: {
      name: '',
      phone: '',
      action: '',
      footer_upper: '',
      realtor_info: '',
      footer_left: '',
      footer_right: '',
      terms_condition: '',
      footer_eula: '',
    },
  });
  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    setState({
      slug: 'site',
      package_name: 'real-estate',
      display_name: 'Site',
      values: {
        name: props.payload.values.name || '',
        phone: props.payload.values.phone || '',
        action: props.payload.values.action || '',
        footer_upper: props.payload.values.footer_upper || '',
        realtor_info: props.payload.values.realtor_info || '',
        footer_left: props.payload.values.footer_left || '',
        footer_right: props.payload.values.footer_right || '',
        terms_condition: props.payload.values.terms_condition || '',
        footer_eula: props.payload.values.footer_eula || '',
      },
    });
  }, [props]);

  useEffect(() => {
    M.updateTextFields();
  });

  const setFieldValue = (field, value) => {
    setState({
      ...state,
      values: {
        ...state.values,
        [field]: value,
      },
    });
  };

  const handleSubmit = e => {
    event.preventDefault();
    const response = apiService.update(constants.API_SETTING_UPDATE + 'site', state);
    const status = alertService.update(response);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <div className="row">
        <div className="input-field col s6">
          <label>Site Name</label>
          <input
            type="text"
            name="name"
            value={state.values.name}
            onChange={e => setFieldValue('name', e.target.value)}
          />
        </div>
        <div className="input-field col s6">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={state.values.phone}
            onChange={e => setFieldValue('phone', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <label>Homepage call to action</label>
          <input
            type="text"
            name="action"
            value={state.values.action}
            onChange={e => setFieldValue('action', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <label>Realtor Info</label>
          <br></br>
          <Editor onChange={setFieldValue} value={state.values.realtor_info || ''} />
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <Editor onChange={setFieldValue} value={state.values.footer_upper || ''} />
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <Editor onChange={setFieldValue} value={state.values.footer_left || ''} />
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <Editor onChange={setFieldValue} value={state.values.footer_right || ''} />
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <Editor onChange={setFieldValue} value={state.values.terms_condition || ''} />
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <Editor onChange={setFieldValue} value={state.values.footer_eula || ''} />
        </div>
      </div>

      <div className="row">
        <div className="col s12 mt-3">
          <button type="submit" className="btn gradient-45deg-purple-deep-orange">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SettingResource(Site, constants.API_SETTING + 'site');
