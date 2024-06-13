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



interface Item {
    name: string;
    quantity: number;
    price_per_unit: number;
    total: number;
}

interface Round {
    created: string;
    items: Item[];
}

interface Order {
    created: string;
    paid: boolean;
    subtotal: number;
    taxes: number;
    discounts: number;
    items: Item[];
    rounds: Round[];
}

const OrdersPage = async () => {
    const res = await fetch('http://127.0.0.1:8000/order/')
    const orders: Order[] = await res.json();

  return (
    <div>
      <Card className='main-div'>
      <CardHeader
        avatar = {<Button variant="outlined" href="/">Back</Button>}
      />
      
      <CardContent>
        <Typography className="main-title" variant="h5">Orders</Typography>
        <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow hover>
                    <TableCell>Created</TableCell>
                    <TableCell align="left">Paid</TableCell>
                    <TableCell align="left">Subtotal</TableCell>
                    <TableCell align="left">Taxes</TableCell>
                    <TableCell align="left">Discounts</TableCell>
                    <TableCell align="left">Items</TableCell>
                    <TableCell align="left">Rounds</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map((order) => (
                    <TableRow hover key={order.created}>
                        <TableCell>{order.created.substring(0, 19).replace('T', ' ')}</TableCell>
                        <TableCell>{String(order.paid)}</TableCell>
                        <TableCell>{order.subtotal}</TableCell>
                        <TableCell>{order.taxes}</TableCell>
                        <TableCell>{order.discounts}</TableCell>
                        <TableCell>
                            
                        <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
                        <Table size="small" >
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">Quantity</TableCell>
                                <TableCell align="left">Price Per Unit</TableCell>
                                <TableCell align="left">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {order.items.map((item: Item, i) => (
                                <TableRow hover key={i}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.price_per_unit}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>{item.total}</TableCell>                                    
                                </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                        </TableContainer>

                        </TableCell>
                        <TableCell>
                            <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
                            <Table size="small">
                            <TableHead>
                                <TableRow hover>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="left">Quantity</TableCell>
                                    <TableCell align="left">Price Per Unit</TableCell>
                                    <TableCell align="left">Total</TableCell>
                                </TableRow>
                            </TableHead>
                            {order.rounds.map((round: Round, i) => (
                            <TableBody>
                            <TableRow hover key={i}>
                                <TableCell colSpan={4} align="center">{round.created.substring(0, 19).replace('T', ' ')}</TableCell>
                            </TableRow>
                            {round.items.map((item: Item, i) => (                              
                                    <TableRow hover key={i}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.price_per_unit}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>{item.total}</TableCell>                                    
                                    </TableRow>
                            ))}
                            </TableBody>
                            ))}
                            </Table>
                            </TableContainer>
                        </TableCell>
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

export default OrdersPage