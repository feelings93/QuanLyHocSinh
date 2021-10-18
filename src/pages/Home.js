import React from "react";
import StatusCard from "../components/status-card/StatusCard";
import statusCards from "../assets/JsonData/status-card-data.json";
import { Link } from "react-router-dom";
import TopStudentList from "../components/topStudent/TopStudentList";
import TopClassList from "../components/topClass/TopClassList";
import Chart from 'react-apexcharts';

const chartOptions = {
  series: [{
      name: 'Học sinh lên lớp',
      data: [120,140,100,190,120,200]
  }, {
      name: 'Học sinh ở lại',
      data: [40, 30, 70, 80, 40, 16]
  }],
  options: {
      color: ['#6ab04c', '#2980b9'],
      chart: {
          background: 'transparent'
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      xaxis: {
          categories: ['2018', '2019', '2020', '2021', '2022', '2023']
      },
      legend: {
          position: 'top'
      },
      grid: {
          show: true
      }
  }
}

const Home = (props) => {
  return (
    <div>
       <h2 className="page-header">Dashboard</h2>
          <div className="row">
                <div className="col-6">
                  <div className="row">
                      {
                          statusCards.map((item, index) => (
                              <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                          ))
                      }
                    </div>
              </div>
              <div className="col-6">
                    <div className="card full-height">
                    <Chart
                             options={ 
                              chartOptions.options
                          } 
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>

                </div>
                <div className="col-4">
                  <div className="cardclass">
                     <TopClassList></TopClassList>
                  </div>
                </div>
                <div className="col-8">
                  <div className="cardstudent">
                    <TopStudentList></TopStudentList>
                  </div>
                </div>
            </div>
    </div>
   
  );
};

export default Home;
