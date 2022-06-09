import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CardAnalytic from '../../components/CardAnalytic'
import NavAdmin from '../../components/NavAdmin'
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const Overview = ()=> {

  const [users, setUsers] = useState([])
  const [revenue, setRevenue] = useState(0)

  useEffect(()=>{
    axios.get('http://localhost/ishare/backend/user/totalUsers')
    .then(response=>{
      // console.log(response.data)
      setUsers(response.data.totalUsers)
    })
    .catch(error=>{
      console.log(error)
    })
  }, [])

  useEffect(()=>{
    axios.get('http://localhost/ishare/backend/user/totalProfit')
    .then(response=>{
      // console.log(response.data)
      setRevenue(response.data.totalProfit)
    })
    .catch(error=>{
      console.log(error)
    })
  }, [])

  const data1 = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };

  return (
    <div className='font-["poppins"]'>
        <NavAdmin />
        <center><h1 className='ml-64 p-4 mt-10 text-secondColor text-3xl font-bold mll mllDashboard'>ADMIN DASHBOARD</h1></center>
        <div className='ml-20 responMa sm:mx-auto md700:mt-24'>
          <div className='flex justify-center ml-40 admin_respon marginTop0' style={{marginTop:"6.5rem"}}>
            <CardAnalytic img='users' title='Total Users' data={users} />
            <CardAnalytic img='views' title='Total Views' data={'2450'}/>
            <CardAnalytic img='money' title='Total Revenue' data={'$'+revenue} />
          </div>
          <div className='flex justify-center gap-24 mt-12 ml-44 admin_charts'>
            <div className='w-1/3 line'>
              <Line data={data2} />
            </div>
            <div className='w-64 doughunt'>
              <Doughnut data={data1} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Overview