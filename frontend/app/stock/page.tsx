import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';

interface Beer {
    name: string;
    price: number;
    quantity: number;
}

interface Stock {
    last_updated: string;    
    beers: Beer[]
}

const StockPage = async () => {

    const res = await fetch('http://127.0.0.1:8000/stock/')
    const stock: Stock = await res.json();

  return (
    <div>
    <Card className='main-div' sx={{ maxWidth: 500 }}>
    <CardHeader
      avatar = {<Button variant="outlined" href="/">Back</Button>}
      title = {"Last Updated: "+ stock.last_updated.substring(0, 19).replace('T', ' ')}
    />
    
    <CardContent>
      <Typography className="main-title" variant="h5">Stock</Typography>
      <TableContainer component={Paper}>
          <Table>
          <TableHead>
              <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Quantity</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
          {stock.beers.map((beer: Beer, i) => (
            <TableRow key={i}>
                <TableCell>{beer.name}</TableCell>
                <TableCell>{beer.price}</TableCell>
                <TableCell>{beer.quantity}</TableCell>
            </TableRow>
          ))}
          </TableBody>
            </Table>
        </TableContainer>
      </CardContent>
      </Card>
    </div>
  )
}

export default StockPage
