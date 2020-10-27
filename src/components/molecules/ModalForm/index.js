import React from 'react';
import img_login from '../../../assets/img/thumb/login-illustration.svg';
import img_face from '../../../assets/img/thumb/face-24px.svg'

const ModalForm = () => {

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
                    <input className="form-control rounded-pill border-danger" type="text" id="nama" placeholder="Nama"/>
                  </div>
                  <div className="form-group">
                    <input className="form-control rounded-pill border-danger" type="text" id="email" placeholder="email"/>
                  </div>
                  <div className="form-group">
                    <input className="form-control rounded-pill border-danger" type="password" id="password" placeholder="password"/>
                  </div>
                  <div>
                    <button className="btn btn-danger rounded-pill form-control">Register</button>
                  </div>
                </div>
              </div>
            </div>
        </div>    
      </div>
    </div>
  )
}

export default ModalForm;