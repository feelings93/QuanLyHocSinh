import React, { useEffect } from "react";
import StatusCard from "../components/status-card/StatusCard";
import statusCards from "../assets/JsonData/status-card-data.json";
import TopStudentList from "../components/topStudent/TopStudentList";
import TopClassList from "../components/topClass/TopClassList";
import Chart from "react-apexcharts";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import usehttp from "../hooks/use-http";
import { getAllStudents } from "../lib/api";

const chartOptions = {
  series: [
    {
      name: "Học sinh lên lớp",
      data: [120, 140, 100, 190, 120, 200],
    },
    {
      name: "Học sinh ở lại",
      data: [40, 30, 70, 80, 40, 16],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: true,
    },
  },
};

const Home = (props) => {
  const { sendRequest, status, data, error } = usehttp(getAllStudents, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!data || data.length === 0)) {
    return <p>Không có</p>;
  }
  return (
    <Grid
      container
      columns={{ sm: 12, xs: 4, md: 12 }}
      rowSpacing={5}
      columnSpacing={4}
      style={{ padding: "20px" }}
    >
      <Grid item sm={6} xs={4}>
        <Grid container rowSpacing={4} columnSpacing={3}>
          {statusCards.map((item, index) => (
            <Grid item sm={6} xs={4} key={index}>
              <StatusCard
                icon={item.icon}
                count={item.count}
                title={item.title}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item sm={6} xs={4}>
        <Box
          height="100%"
          width="100%"
          sx={{
            boxShadow: 3,
            borderRadius: 4,
            backgroundColor: "#fff",
          }}
        >
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="line"
            height="100%"
          />
        </Box>
      </Grid>
      <Grid item sm={4} xs={4}>
        <Box
          style={{ padding: "20px" }}
          height="100%"
          width="100%"
          sx={{
            boxShadow: 3,
            borderRadius: 4,
            backgroundColor: "#fff",
          }}
        >
          <TopClassList></TopClassList>
        </Box>
      </Grid>
      <Grid item sm={8} xs={4}>
        <Box
          style={{ padding: "20px" }}
          height="100%"
          width="100%"
          sx={{
            boxShadow: 3,
            borderRadius: 4,
            backgroundColor: "#fff",
          }}
        >
          <TopStudentList></TopStudentList>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
