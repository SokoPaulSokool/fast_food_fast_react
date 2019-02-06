import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdbreact';
import { toast } from 'react-toastify';
import './LandingView.scss';
import { Link } from 'react-router-dom';
import { logInAction } from '../../actions/authAction';

export class LandingView extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: { message: '' } };
  }

  componentWillReceiveProps(nextProps) {
    const { errors, user } = nextProps;
    const { history } = this.props;
    if (errors) {
      this.setState({ errors: errors });
    }
    if (user.user_name) {
      toast.success('Sign up was successful. You can now login', {
        position: toast.POSITION.TOP_CENTER
      });
      setTimeout(() => {
        history.push('./');
      }, 3000);
    }
  }

  submit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { logInAction } = this.props;
    const data = {
      email: email,
      password: password
    };

    logInAction(data);
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { errors } = this.state;
    return (
      <MDBContainer fluid className="m-0 p-0">
        <div>
          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center ">
              <MDBContainer>
                <MDBRow>
                  <div className="primary-text-color text-center text-md-left col-xs-12 col-md-6 mt-xl-5 mb-5">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5 ">
                      Fast Food Fast{' '}
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">We deliver food. Order now</h6>

                    <Link to="signup">
                      <MDBBtn className="bg-secondary">Signup</MDBBtn>
                    </Link>

                    <MDBBtn outline color="orange">
                      Read More
                    </MDBBtn>
                  </div>
                  <MDBCol xs="12" md="6" xl="5" className="mb-4">
                    <MDBCard className="dark-grey-text">
                      <MDBCardBody className="z-depth-2">
                        <h3 className="dark-grey-text text-center">
                          <strong>Log in</strong>
                        </h3>
                        <hr />
                        <form>
                          <MDBInput
                            onChange={this.onChange}
                            name="email"
                            label="Your email"
                            icon="envelope"
                          />
                          <MDBInput
                            onChange={this.onChange}
                            type="password"
                            name="password"
                            label="Your password"
                            icon="lock"
                          />
                          <p className="red-text">{errors.message}</p>

                          <div className="text-center mt-3 black-text">
                            <MDBBtn
                              type="submit"
                              onClick={this.submit}
                              className="bg-secondary"
                              color="orange"
                            >
                              Submit
                            </MDBBtn>
                            <hr />
                          </div>
                        </form>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </div>
      </MDBContainer>
    );
  }
}

LandingView.propTypes = {
  logInAction: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}),
  user: PropTypes.shape({})
};

LandingView.defaultProps = {
  errors: { message: '' },
  user: {}
};
const mapStateToProps = state => {
  return { user: state.auth.user, errors: state.auth.errors };
};

export default connect(
  mapStateToProps,
  { logInAction }
)(LandingView);
