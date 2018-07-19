import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Auth from './route/auth';

const mapStateToProps = ({ auth }) => ({
  isLogin: auth.isLogin,
});

class App extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if (!isLogin) {
      return <Auth />;
    }
    return null;
  }
}

App.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
