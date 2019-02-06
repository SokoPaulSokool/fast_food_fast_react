import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdbreact';
import './LandingView.scss';

export class LandingView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MDBContainer fluid className="m-0 p-0">
        <div id="apppage">
          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer>
                <MDBRow>
                  <div className="primary-text-color text-center text-md-left col-xs-12 col-md-6 mt-xl-5 mb-5">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5 ">
                      Fast Food Fast{' '}
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">We deliver food. Order now</h6>
                    <MDBBtn className="bg-secondary">LogIn</MDBBtn>
                    <MDBBtn outline color="orange">
                      Read More
                    </MDBBtn>
                  </div>
                  <MDBCol xs="12" md="6" xl="5" className="mb-4">
                    <MDBCard className="dark-grey-text">
                      <MDBCardBody className="z-depth-2">
                        <h3 className="dark-grey-text text-center">
                          <strong>Sign Up</strong>
                        </h3>
                        <hr />
                        <MDBInput label="Your name" icon="user" />
                        <MDBInput label="Your email" icon="envelope" />

                        <div className="text-center mt-3 black-text">
                          <MDBBtn className="bg-secondary">Send</MDBBtn>
                          <hr />
                        </div>
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
LandingView.propTypes = {};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LandingView);
export default LandingView;
