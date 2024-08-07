// src/components/GymStatsChart.js

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Paper, Typography } from "@mui/material";
import './DashboardGraph.css'

const data = [
  { day: "Monday", visits: 120 },
  { day: "Tuesday", visits: 98 },
  { day: "Wednesday", visits: 150 },
  { day: "Thursday", visits: 130 },
  { day: "Friday", visits: 110 },
  { day: "Saturday", visits: 170 },
  { day: "Sunday", visits: 180 },
];

const DashboardGraph = () => {
  return (
    <Paper elevation={3} style={{ padding: "20px",width:'30%'}}>
      <span variant="h5" align="center" gutterBottom className="graph-title">
        Gym Website Visits This Week
      </span>
      <ResponsiveContainer width="100%" height={380}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="visits" fill="#3f51b5" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default DashboardGraph;
