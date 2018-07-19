import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Auth from './route/auth';

const mapStateToProps = ({ auth }) => ({
  isLogin: auth.isLogin,
  role: auth.user.role,
});

class App extends PureComponent {
  render() {
    const { isLogin, role } = this.props;
    if (isLogin) {
      return role === 'driver' ? <Auth /> : <Auth />;
    }
    return <Auth />;
  }
}

App.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  role: PropTypes.string,
};

App.defaultProps = {
  role: '',
};

export default connect(mapStateToProps)(App);
