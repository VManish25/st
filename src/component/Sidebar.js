import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

function Sidebar() {
    let navigate = useNavigate()
 return <>

 <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">


<div className="sidebar-brand d-flex align-items-center justify-content-center" >
    <div className="sidebar-brand-icon rotate-n-5">
    <i class="fa-solid fa-computer"></i>
    </div>
    <div className="sidebar-brand-text mx-3">ABC Institute</div>
</div>


<hr className="sidebar-divider my-0"/>

<Link to='/dashboard'>
<li className="nav-item active">
    <div className="nav-link">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></div>
</li>
</Link>

<hr className="sidebar-divider"/>


<div className="sidebar-heading">
    Interface
</div>

<Link to='/add-user'>
<li className="nav-item">
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fa-solid fa-user-plus"></i>
        <span>Add User</span>
    </div>
</li>
</Link>

<Link to='/profile'>
<li className="nav-item">
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fa-solid fa-address-card"></i>
        <span>Profile</span>
    </div>
</li>
</Link>

<Link to='/pending-request'>
<li className="nav-item">
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fa-solid fa-rotate"></i>
        <span>Pending Request</span>
    </div>
</li>
</Link>

</ul>

 </>
}

export default Sidebar