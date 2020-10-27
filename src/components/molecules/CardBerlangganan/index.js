import React from 'react';
import { Link } from 'react-router-dom';
import img_check from '../../../assets/img/thumb/check_circle-24px.svg';

const CardBerlangganan = (props) => {
    return (
      <div className="col-md-4">
        <div className="card rounded">
          <div className="card-body">
            <h4 className="card-title text-center text-capitalize">{props.jenis}</h4>
            <div className="text-center mb-3">
              <small>Rp</small>
              <h4 className="mb-0">{props.harga}</h4>
              <small>/ bulan</small>
            </div>
            <div>
              <ul className="list-unstyled">
                <li className="mb-2"><div className="flex-row"><img className="mr-2" src={img_check} style={{width: "20px"}}></img>{props.layanan1}</div></li>
                <li className="mb-2"><div className="flex-row"><img className="mr-2" src={img_check} style={{width: "20px"}}></img>{props.layanan2}</div></li>
                <li className="mb-2"><div className="flex-row"><img className="mr-2" src={img_check} style={{width: "20px"}}></img>{props.layanan3}</div></li>
              </ul>
            </div>
            <div className="text-center">
              <Link to="/Register" type="button" className="btn btn-danger rounded-pill w-100">Daftar Sekarang</Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CardBerlangganan;