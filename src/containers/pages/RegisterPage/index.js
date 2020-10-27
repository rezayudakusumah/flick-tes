import React, { Component } from 'react';
import ModalForm from '../../../components/molecules/ModalForm';
import img_login from '../../../assets/img/thumb/login-illustration.svg';
import img_face from '../../../assets/img/thumb/face-24px.svg';
import firebase from '../../../config/firebase';
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { registerUserAPI } from '../../../config/redux/action';

class RegisterPage extends Component {

  state = {
    nama: '',
    email: '',
    password: '',
    isLoading: true,
    emailError: ''
  }

  handleChange = (data) => {
    this.setState({
      [data.target.id]: data.target.value
    })
  }

  checkValidation = () => {
    let emailError = '';

    if (!this.state.email.includes('@')){
      emailError = 'Invalid Email';
    }

    if(emailError){
      this.setState({emailError});
      return false;
    }

    return true;
  };

  handleSubmit = async () => {
    const isValid = this.checkValidation();
    const  {email, password} = this.state;
    if(isValid){
      const res = await this.props.registerAPI({email, password}).catch(err => err);
      if(res){
        this.setState({
          nama: '',
          email: '',
          password: ''
        })
      }
    }
    
  }

  render() {
      return (
        <div className="container mt-5">
        <div className="row">
          <div className="card shadow mx-auto">
              <div className="card-body p-5">
                <div className="row">
                  <div className="col-md-6">
                    <img src={img_login} style={{width: "250px"}}></img>
                  </div>
                  <div className="col-md-6">
                    <h5>Buat Akun</h5>
                    <div className="form-group">
                      {/* <img className="position-absolute" src={img_face} style={{width: "30px"}}></img> */}
                      <input className="form-control rounded-pill border-danger" type="text" id="nama" value={this.state.nama} placeholder="Nama" onChange={this.handleChange}/>
                    </div>
                    <div>
                      <small className="text-danger">{this.state.emailError}</small>
                    </div>
                    <div className="form-group">
                      <input className="form-control rounded-pill border-danger" type="text" id="email" value={this.state.email} placeholder="email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input className="form-control rounded-pill border-danger" type="password" id="password" value={this.state.password} placeholder="password" onChange={this.handleChange}/>
                    </div>
                    <div>
                      <Button onClick={this.handleSubmit} title="Register" loading={this.props.isLoading} />
                    </div>
                  </div>
                </div>
              </div>
          </div>    
        </div>
      </div>
      )
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(RegisterPage);