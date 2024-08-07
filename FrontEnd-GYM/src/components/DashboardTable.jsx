import React from 'react';
import './DashboardTable.css'
import {
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from '@mui/material';
import DashboardGraph from './DashboardGraph';

const data = [
  { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 32, email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', age: 24, email: 'alice@example.com' },
  { id: 4, name: 'Robert Brown', age: 45, email: 'robert@example.com' },
  { id: 5, name: 'Emily Davis', age: 29, email: 'emily@example.com' },
];

const DashboardTable = () => {
  return (
    <Card  className='dash-table-card'>
      <CardHeader title={<span className='table-title'>Admin Information</span>}  />
      <CardContent>
        <TableContainer component={Paper} style={{border:'1px solid aliceblue'}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <p className='table-head'>
                    Name
                  </p>
                </TableCell>
                <TableCell>
                  <span className='table-head'>
                    Age
                  </span>
                </TableCell>
                <TableCell>
                  <p className='table-head'>
                    Email
                  </p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="table-cell">{row.name}</TableCell>
                  <TableCell className="table-cell">{row.age}</TableCell>
                  <TableCell className="table-cell">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default DashboardTable;
