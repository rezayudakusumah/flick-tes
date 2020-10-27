import React, { Component, Fragment } from 'react';
import CardBerlangganan from '../../../components/molecules/CardBerlangganan'
import Footer from '../../../components/molecules/Footer';
import ModalForm from '../../../components/molecules/ModalForm';
import Navbar from '../../../components/molecules/navbar';
import { connect } from 'react-redux';
import axios from 'axios';

class BerlanggananPage extends Component {

    state = {
        show: false,
        langganan: []
    }

    componentDidMount(){
      axios.get('http://localhost:3004/langganan')
      .then((res) => {
        this.setState({
          langganan: res.data
        })
      })
    }

    showModal = () => {
      this.setState({
        show: true
      })
    }

    hideModal = () => {
      this.setState({
        show: false
      })
    }

    render(){
        return (
            <Fragment>
                <div className="container pl-5 pr-5 mt-5">
                    <h3 className="mb-5">Daftar sekarang dan nikmati fiturnya!</h3>                   
                    <div className="row ml-2">
                      {
                        this.state.langganan.map(langganan => {
                          return <CardBerlangganan key={langganan.id} jenis={langganan.jenis} harga={langganan.harga} layanan1={langganan.layanan1} layanan2={langganan.layanan2} layanan3={langganan.layanan3} />
                        })
                      }
                    {/* <CardBerlangganan />
                    <CardBerlangganan /> */}
                    </div>
                </div>
            <Footer />
            </Fragment>
        )
    }
}

const reduxState = (state) => ({
  popupState: state.popup
})

export default connect(reduxState, null)(BerlanggananPage);