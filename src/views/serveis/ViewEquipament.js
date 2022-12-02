import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const cards = [1, 2, 3, 4];
const theme = createTheme();

function ViewEquipament(){

    return(
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main>
                    <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                            <Chip label="Equipament" size="large" sx={{backgroundColor:"green", color:"white"}} variant="outlined" />
                        </Stack>
                    <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                            <CardMedia
                                component="img"
                                sx={{
                                    height:150
                                }}
                                image="https://source.unsplash.com/random"
                                alt="random"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                <diV>Articulo 1</diV>
                                </Typography>
                                <Typography>
                                <diV>Precio: 150, Articulo ofrecido por la Afa a un precio acequible para los padres y madres de familia de nuestra escuela.</diV>
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">View</Button>
                                <Button size="small">Edit</Button>
                            </CardActions> */}
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                    </Container>
                </main>
            </ThemeProvider>
        </>
    )
}

export default ViewEquipament;