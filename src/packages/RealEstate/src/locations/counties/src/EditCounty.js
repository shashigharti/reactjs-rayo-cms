import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ToolBar from '../../../../../Core/Components/ToolBar';
import * as constants from '../constants';
import { CountyContext } from '../../../../';
import { apiService, alertService } from '../../../../../Core';
import { EditResource } from '../../../../../Core/Components/CRUD';

const CountyEdit = props => {
  const { dispatch: pdispatch } = useContext(CountyContext);
  const [toList, setToList] = useState(false);
  const [state, setState] = useState({
    id: '',
    name: '',
    slug: '',
    frontpage: '',
    dropdown: '',
    frontpage_order: '',
    menu_order: '',
    footer_order: '',
  });

  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    setState({
      id: props.payload.id,
      name: props.payload.name,
      slug: props.payload.slug,
      frontpage: props.payload.frontpage,
      dropdown: props.payload.dropdown,
      frontpage_order: props.payload.frontpage_order,
      menu_order: props.payload.menu_order,
      footer_order: props.payload.footer_order,
    });
  }, [props]);

  useEffect(() => {
    M.updateTextFields();
  });

  const handleSubmit = e => {
    event.preventDefault();
    const { id } = state;
    let response = apiService.update(constants.API_COUNTY_UPDATE + id, state);
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
      {toList ? <Redirect to={constants.COUNTY} /> : null}
      <div id='main'>
        <ToolBar breadcrumbs={constants.BREADCRUMB_COUNTY_CREATE} toolbar={constants.TOOLBAR} />
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col s12'>
              <div className='container-fluid edit--page'>
                <div className='row'>
                  <div className='col s12'>
                    <ul className='tabs'>
                      <li className='tab'>
                        <a className='active' href='#pages'>
                          Edit County
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='col s12'>
                    <div className='panel card tab--content'>
                      <div id='pages' className='col s12'>
                        <div className='row'>
                          <div className='input-field col s6'>
                            <label>County Name</label>
                            <input
                              type='text'
                              name='name'
                              value={state.name}
                              onChange={e => setFieldValue('name', e.target.value)}
                            />
                          </div>
                          <div className='input-field col s6'>
                            <input
                              type='text'
                              name='slug'
                              value={state.slug}
                              onChange={e => setFieldValue('slug', e.target.value)}
                            />
                            <label>Slug</label>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='input-field col s6'>
                            <select
                              name='frontpage'
                              defaultValue={toString(state.frontpage)}
                              onChange={e => setFieldValue('frontpage', e.target.value)}
                            >
                              <option value='' disabled>
                                Choose your option
                              </option>
                              <option value='0'>Show</option>
                              <option value='1'>Hide</option>
                            </select>
                            <label>Frontpage</label>
                          </div>
                          <div className='input-field col s6'>
                            <input
                              type='text'
                              name='frontpage_order'
                              value={state.frontpage_order}
                              onChange={e => setFieldValue('frontpage_order', e.target.value)}
                            />
                            <label>Frontpage order</label>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='input-field col s6'>
                            <select
                              name='dropdown'
                              defaultValue={toString(state.dropdown)}
                              onChange={e => setFieldValue('dropdown', e.target.value)}
                            >
                              <option value='' disabled>
                                Choose your option
                              </option>
                              <option value='0'>Show</option>
                              <option value='1'>Hide</option>
                            </select>
                            <label>Dropdown</label>
                          </div>
                          <div className='input-field col s6'>
                            <input
                              type='text'
                              name='menu_order'
                              value={state.menu_order}
                              onChange={e => setFieldValue('menu_order', e.target.value)}
                            />
                            <label>Dropdown order</label>
                          </div>
                        </div>

                        <div className='row'>
                          <div className='col s12'>
                            <div className='input-field'>
                              <button
                                type='submit'
                                className='btn gradient-45deg-purple-deep-orange'
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

export default EditResource(CountyEdit, constants.API_COUNTY_EDIT);
