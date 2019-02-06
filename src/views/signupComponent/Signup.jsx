import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { MDBCard, MDBBtn, MDBInput, MDBCardBody } from 'mdbreact';
import { signUpAction } from '../../actions/authAction';
import './Signup.scss';

export class Signup extends Component {
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
    const { user_name, email, password } = this.state;
    const { signUpAction } = this.props;
    const data = {
      user_name: user_name,
      email: email,
      password: password,
      account_type: 'customer'
    };
    signUpAction(data);
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container-fluid  mt-5 col-md-6">
        <MDBCard className="dark-grey-text">
          <MDBCardBody className="z-depth-2">
            <h3 className="dark-grey-text text-center">
              <strong>Sign Up</strong>
            </h3>
            <hr />
            <form>
              <MDBInput
                name="user_name"
                onChange={this.onChange}
                label="Your name"
                icon="user"
              />
              <MDBInput
                onChange={this.onChange}
                name="email"
                label="Your email"
                icon="envelope"
              />
              <MDBInput
                onChange={this.onChange}
                name="password"
                type="password"
                label="Your password"
                icon="lock"
              />
              <p className="red-text">{errors.message}</p>

              <div className="text-center mt-3 black-text">
                <MDBBtn
                  type="submit"
                  onClick={this.submit}
                  className="bg-secondary"
                >
                  Submit
                </MDBBtn>
                <hr />
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}
Signup.propTypes = {
  signUpAction: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}),
  user: PropTypes.shape({})
};

Signup.defaultProps = {
  errors: { message: '' },
  user: {}
};
const mapStateToProps = state => {
  return { user: state.auth.user, errors: state.auth.errors };
};

export default connect(
  mapStateToProps,
  { signUpAction }
)(Signup);
