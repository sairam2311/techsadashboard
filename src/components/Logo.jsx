import React from 'react'
import './logo.css'

function Logo() {

    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

  return (
    <div className='d-flex align-items-center justify-content-between'>
       <i className='bi bi-list toggle-sidebar-btn' onClick={handleToggleSideBar}></i>
        <a href="https://www.telangana.gov.in/wp-content/uploads/2022/10/Telangana-Logo_final-1024x1014.png" className="logo d-flex align-items-center">
        <span className='d-none d-lg-block'>TGRAC</span>
        </a>
       
    </div>
  )
}

export default Logo