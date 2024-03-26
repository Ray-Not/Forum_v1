import React from 'react'
import DonationForm from './DonationForm'

function DonationList(props) {
  return (
    <>
      <div className='row bg-dark mx-auto d-flex justify-content-center align-items-center'>
        <div className='col-12 text-center text-white fs-1 mt-5'>
          Покупка привилегий
        </div>
        <DonationForm servers={props.servers}/>
      </div>
    </>
  )
}


export default DonationList