import React, { Component } from 'react';
import ModalForm from '../../../components/molecules/ModalForm';
import img_login from '../../../assets/img/thumb/login-illustration.svg';
import img_face from '../../../assets/img/thumb/face-24px.svg';
import firebase from '../../../config/firebase';
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { loginUserAPI } from '../../../config/redux/action';

class LoginPage extends Component {

  state = {
    email: '',
    password: '',
    isLoading: true
  }

  handleChange = (data) => {
    this.setState({
      [data.target.id]: data.target.value
    })
  }

  handleSubmit = async () => {
    const  {email, password} = this.state;
    const {history} = this.props;
    const res = await this.props.loginAPI({email, password}).catch(err => err);
    if(res){
        console.log('login success');
        this.setState({
            email: '',
            password: ''
        })
        history.push('/Dashboard')
    }else {
        console.log('login failed');
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
                    <h5 className="text-capitalize">masuk</h5>
                    <div className="form-group">
                      <input className="form-control rounded-pill border-danger" type="text" id="email" value={this.state.email} placeholder="email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input className="form-control rounded-pill border-danger" type="password" id="password" value={this.state.password} placeholder="password" onChange={this.handleChange}/>
                    </div>
                    <div>
                      <Button onClick={this.handleSubmit} title="Masuk" loading={this.props.isLoading} />
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
  loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(LoginPage);