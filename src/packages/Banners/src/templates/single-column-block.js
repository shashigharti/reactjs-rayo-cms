import React, { useEffect } from 'react';
export default props => {
  useEffect(() => {
    M.AutoInit();
  });
  useEffect(() => {
    M.updateTextFields();
  });
  const { setFieldValue, state } = props;

  return (
    <div className="banner-template">
      <div className="row">
        <div className="input-field col s12">
          <label>Prices</label>
          <select
            defaultValue={state.prices}
            name="prices"
            multiple
            onChange={e =>
              setFieldValue('prices', Array.from(e.target.selectedOptions, item => item.value))
            }
            multiple
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="10000-20000">10000-20000</option>
            <option value="20000-30000">20000-30000</option>
            <option value="30000-40000">30000-40000</option>
            <option value="40000-50000">40000-50000</option>
            <option value="50000-60000">50000-60000</option>
            <option value="60000-70000">60000-70000</option>
            <option value="70000-80000">70000-80000</option>
            <option value="80000-90000">80000-90000</option>
            <option value="90000-100000">90000-100000</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <label>Locations</label>
          <select
            defaultValue={state.location}
            name="location"
            onChange={e => setFieldValue('location', e.target.value)}
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="Atlantis">Atlantis</option>
            <option value="Boca Raton">Boca Raton</option>
            <option value="Boynton Beach">Boynton Beach</option>
            <option value="Clewiston">Clewiston</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <label>Sub Areas</label>
          <select
            defaultValue={state.sub_areas}
            name="sub_areas"
            multiple
            onChange={e =>
              setFieldValue('sub_areas', Array.from(e.target.selectedOptions, item => item.value))
            }
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="condos">Condos</option>
            <option value="neighbourhood">Neighbourhood</option>
            <option value="acreages">Acreages</option>
          </select>
        </div>
      </div>
    </div>
  );
};
