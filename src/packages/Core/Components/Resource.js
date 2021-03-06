import React, { Component } from 'react';
import { apiService } from '..';
import PropTypes from 'prop-types';

/**
 * Resource class
 *
 * Ref: The React Cookbook: Advanced Recipes to Level Up Your Next App
 */
class Resource extends Component {
  static propTypes = {
    /** API call state */
    loading: PropTypes.bool,
    /** Response from the API call */
    payload: PropTypes.array,
  };
  state = {
    loading: false,
    payload: [],
  };
  componentDidMount() {
    this.setState({ loading: true });
    const path = this.props.path;

    apiService
      .getAll(path)
      .then(response => {
        this.setState({
          payload: response.data,
          loading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return this.props.render(this.state, this.props);
  }
}

export default Resource;
