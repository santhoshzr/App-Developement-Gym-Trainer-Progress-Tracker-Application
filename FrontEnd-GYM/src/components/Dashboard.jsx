import React from 'react';
import './Dashboard.css';
import { Card, CardContent } from '@mui/material';
import DashboardTable from './DashboardTable';
import DashboardGraph from './DashboardGraph';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa'; 

const Dashboard = ({ onLogout }) => {

  const navigate=useNavigate();
  const name = useSelector((state) => state.name);

  const handleLog = () => {
    onLogout();
    navigate('/');
  }

  return (
    <div className='dash-cont'>
      <div className='dash-left'>
        <div>
        <FaUserCircle size={60} style={{marginTop:'-2%'}}/>
        </div>
        <br />
        <div>
          <span className='dash-name'>{name}'s</span>
        </div>
        <div>
          <span className='dash-name'>Dashboard</span>
        </div>
        <div>
          <ul className='dash-item' >
            <li ><Link to="/" style={{textDecoration:'none', color:'white'}}>Home</Link></li>
            <li>Staff</li>
            <li>Manage User</li>
            <li>Settings</li>
            <li className='dash-log' onClick={handleLog}>
              <LogoutIcon className='logout-icon' /> Logout
            </li>
          </ul>
        </div>
      </div>
        <div className='dash-right'>
            <div className='right-top'>
              <Card className='dash-card' style={{textAlign:'center',fontWeight:'500',fontSize:'19px'}}>
                <CardContent>
                  Total No.of.Trainers:
                </CardContent>
                <CardContent style={{textAlign:'center',fontSize:'28px'}}>
                  10
                </CardContent>
              </Card>
              <Card className='dash-card' style={{textAlign:'center',fontWeight:'500',fontSize:'19px'}}>
                <CardContent>
                  Total No.of.Participants
                </CardContent>
                <CardContent style={{textAlign:'center',fontSize:'28px'}}>
                  220
                </CardContent>
              </Card>
              <Card className='dash-card' style={{textAlign:'center',fontWeight:'500',fontSize:'19px'}}>
                <CardContent>
                  Average Attendance
                </CardContent>
                <CardContent style={{textAlign:'center',fontSize:'28px'}}>
                  105
                </CardContent>
              </Card>
            </div>
            <br />
            <br />
            <div className='right-bottom'>
            <DashboardTable/>
            <DashboardGraph/>
            </div>
        </div>

    </div>
  )
}

export default Dashboard