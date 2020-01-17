import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
class DepositMoneyFailure extends Component {
    render(){
      let {state = {}} = this.props.location
      let {param, result} = state
      if(!param) return null
        return(
            <div id="content" className="py-4">
            <div className="container">
              <h2 className="font-weight-400 text-center mt-3 mb-4">Deposit Money</h2>
              <div className="row">
                <div className="col-md-8 col-lg-6 col-xl-5 mx-auto"> 
                  <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                    <div className="text-center my-5">
                      <p className="text-center text-danger text-20 line-height-07"><i className="fas fa-check-circle"></i></p>
                      <p className="text-center text-danger text-8 line-height-07">Failure!</p>
                      <p className="text-center text-4">Deposit Failed</p>
                    </div>
                    <Button className="btn btn-primary btn-block"
                        onClick={()=>{
                          this.props.history.push('/deposit-money')
                        }}
                    >Deposit Money Again</Button>
                    {/* <button className="btn btn-link btn-block"><i className="fas fa-print"></i> Print</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default DepositMoneyFailure