
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '@fontsource/roboto/500.css';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function Home() {
  return (
    <main>
      <Card className='main-div' sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography className="main-title" variant="h5">Welcome to the Bar System!</Typography>
          <Stack spacing={2}>
            <Button variant="outlined" href="/orders">Orders</Button>
            <Button variant="outlined" href="/stock">Stock</Button>
          </Stack>
        </CardContent>
      </Card>
    </main>
  );
}
