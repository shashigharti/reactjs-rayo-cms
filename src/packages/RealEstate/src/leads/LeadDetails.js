import React, { Component } from 'react';
import axios from 'axios';
import './fixed-bar.css';
import { DetailSidebar } from './DetailSidebar';
import Overview from './Overview';
import { Communication } from './Communication';
import { Notes } from './Notes';
import { Searches } from './Searches';

class LeadDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lead: {},
      groups: [],
      loading: true,
    };

    this.getLeads = this.getLeads.bind(this);
  }

  componentDidMount() {
    // Get Lead details
    this.getLeads();

    // Get groups
    axios.get('/api/groups/all').then(response => {
      this.setState({
        groups: response.data.data,
      });
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    M.AutoInit();
  }

  getLeads() {
    const { params } = this.props.match;
    axios.get(`/api/lead/${params.id}`).then(response => {
      this.setState({
        loading: false,
        lead: response.data.data,
      });
    });
  }

  render() {
    const { lead, groups, searchFormData } = this.state;
    return (
      <div id="main">
        <div className="row">
          <div className="content-wrapper-before blue-grey lighten-5" />
          <div className="col s12">
            <div className="container">
              <div className="row filter--bar fixed">
                <div className="">
                  <div className="col left">
                    <ul className="tabs theme__tabs">
                      <li className="tab">
                        <a className="active" href="#overview">
                          Overview
                        </a>
                      </li>
                      <li className="tab">
                        <a href="#communication">Communication</a>
                      </li>
                      <li className="tab">
                        <a href="#notes">Notes</a>
                      </li>
                      {/*<li className="tab">*/}
                      {/*  <a href="#">Views/Favs</a>*/}
                      {/*</li>*/}
                      <li className="tab">
                        <a href="#searches">Searches</a>
                      </li>
                      {/*<li className="tab">*/}
                      {/*  <a href="#">Bookmarks</a>*/}
                      {/*</li>*/}
                      {/*<li className="tab">*/}
                      {/*  <a href="#">Reports</a>*/}
                      {/*</li>*/}
                      {/*<li className="tab">*/}
                      {/*  <a href="#">Alerts</a>*/}
                      {/*</li>*/}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                {Object.keys(lead).length > 0 && (
                  <DetailSidebar lead={lead} groups={groups} getLead={this.getLeads} />
                )}
                <div id="overview" className="col s9">
                  {Object.keys(lead).length > 0 && (
                    <Overview
                      loginHistory={lead.loginHistory}
                      logins={lead.logins}
                      activity={lead.activityLog}
                    />
                  )}
                </div>
                <div id="communication" className="col s9">
                  {Object.keys(lead).length > 0 && <Communication emails={lead.emails} />}
                </div>
                <div id="notes" className="col s9">
                  {Object.keys(lead).length > 0 && (
                    <Notes leadId={lead.id} notes={lead.notes} getLead={this.getLeads} />
                  )}
                </div>
                <div id="searches" className="col s9">
                  {Object.keys(lead).length > 0 && <Searches setSearchFormData={this.setSearchFormData} lead={lead} getLead={this.getLeads} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { LeadDetails };
