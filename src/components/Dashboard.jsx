import React from 'react'
import './dashboard.css'
import PageTitle from './PageTitle'
import Reports from './Reports'
import RecentSales from './RecentSales';
import './main.css';
//import TopSelling from './TopSelling';
//import RecentActivity from './RecentActivity';
//import BudgetReport from './BudgetReport';
//import WebTraffic from './WebTraffic';
//import News from './News';
import Cards from './Cards';


function Dashboard() {



return (
    <section className='dashboard section'>
        <PageTitle page="Dashboard"/>
        <div className='row'>
            <div className='col-lg-12'>
                <div className='row'>
                       
                    <div className="col-lg-7">
                        <Reports/>
                    </div>
                    <div className="col-lg-5">
                        <RecentSales/>
                    </div>
                    <div className="col-lg-4">
                    {/* <Cards/>  */}
                    </div>
                </div>
            </div>
            <div className='col-lg-12'>
                {/* <RecentActivity/>
                <BudgetReport/>
                <WebTraffic/>
                <News/> */}
            </div>
        </div>
    </section>
  )
}

export default Dashboard