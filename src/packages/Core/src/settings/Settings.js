import React, { useEffect, useState } from 'react';
import Price from './src/Price';
import FrontPageSettings from './FrontPageSettings';
// import LinkSettings from './LinkSettings';
import GeneralSettings from './GeneralSettings';
import Site from './src/Site';
import Seo from './src/Seo';
import SearchBlock from './src/search-block';
import Search from './src/search';

const Settings = () => {
  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    M.updateTextFields();
  });
  return (
    <div id="main">
      <div className="row">
        <div className="col s12">
          <div className="container-fluid">
            <div className="row">
              <div className="col s12 mt-3">
                <ul className="tabs">
                  <li className="tab">
                    <a href="#test1">General</a>
                  </li>
                  <li className="tab">
                    <a href="#site">Site</a>
                  </li>
                  <li className="tab">
                    <a href="#seo">Seo</a>
                  </li>
                  <li className="tab">
                    <a href="#priceDiv">Price</a>
                  </li>
                  <li className="tab">
                    <a href="#frontPageDiv">Frontpage</a>
                  </li>
                  {/* <li className='tab col s2'>
                        <a href='#linkDiv'>Link</a>
                      </li> */}
                  <li className="tab">
                    <a className="active" href="#searchDiv">
                      Search Blocks
                    </a>
                  </li>
                  <li className="tab">
                    <a href="#test3">Advance Search</a>
                  </li>
                  <li className="tab">
                    <a href="#test4">Users</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div id="seo" className="col s12">
                    <Seo />
                  </div>
                  <div id="test1" className="col s12">
                    <GeneralSettings />
                  </div>
                  <div id="site" className="col s12">
                    <Site />
                  </div>
                  <div id="priceDiv" className="col s12 scale-transition">
                    <Price />
                  </div>
                  <div id="frontPageDiv" className="col s12">
                    <FrontPageSettings />
                  </div>
                  {/* <div id='linkDiv' className='col s12'>
                    <LinkSettings />
                  </div> */}
                  <div id="searchDiv" className="col s12">
                    <SearchBlock />
                  </div>
                  <div id="test3" className="col s12">
                    <Search />
                  </div>
                  <div id="test4" className="col s12">
                    Users
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
