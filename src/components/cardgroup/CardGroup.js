import imag1 from "../carousel/images/IMG_1023.JPG";

import React from 'react';
import Color from 'color';
//import GoogleFont from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
//import NoSsr from '@material-ui/core/NoSsr';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';


const useGridStyles = makeStyles(({ breakpoints }) => ({
    root: {
      [breakpoints.up('md')]: {
        justifyContent: 'center',
      },
    },
  }));
  
const useStyles = makeStyles(() => ({
actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
    transform: 'scale(1.1)',
    },
},
card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
    boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
    //padding: 5,
}),
content: ({ color }) => {
    return {
    backgroundColor: color,
    padding: '1rem 1.5rem 1.5rem',
    };
},
title: {
    fontFamily: 'Tahoma',// 'Keania One',
    fontSize: '1.5rem',
    color: '#fff',
    textTransform: 'uppercase',
},
subtitle: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
},
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
const mediaStyles = useFourThreeCardMediaStyles();
return (
    <CardActionArea className={classes.actionArea}>
    <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
        <Typography className={classes.title} variant={'h1'}>
            {title}
        </Typography>
        <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
    </Card>
    </CardActionArea>
);
};


function CardGroup() {
    const gridStyles = useGridStyles();
    const styles = useStyles({ color: '#203f52', padding:5 });
    const styles2 = useStyles({ color: '#4d137f', padding:5 });
    const styles3 = useStyles({ color: '#ff9900', padding:5 });
    const styles4 = useStyles({ color: '#34241e', padding:5 });

    return (
        <>
            <hr className="featurette-divider"></hr>
            <Box sx={{ flexGrow: 1 }}>
                <Grid classes={gridStyles} container spacing={3} columns={{sm:10}}>
                {/* spacing={{ xs: 1, sm: 3, md: 3 }} */}
                {/* wrap={'nowrap'} */}
                {/* columns={{ xs: 4, sm: 12, md: 12 }}  */}
                    <Grid container item sm={4}>
                    <CustomCard
                        classes={styles}
                        title={'L\'AFA'}
                        //subtitle={'Be a Legend!'}
                        image={
                        imag1
                        }
                    />
                    </Grid>
                    <Grid container item sm={4}>
                    <CustomCard
                        classes={styles2}
                        title={'SERVEIS'}
                        image={
                        imag1
                        }
                    />
                    </Grid>
                    <Grid container item sm={4}>
                    <CustomCard
                        classes={styles3}
                        title={'TRANSPARENCIA'}
                        image={imag1}
                    />
                    </Grid>
                    <Grid container item sm={4}>
                    <CustomCard
                        classes={styles4}
                        title={'NOTICIES'}
                        image={
                        imag1
                        }
                    />
                    </Grid>
                    <Grid container item sm={4}>
                    <CustomCard
                        classes={styles3}
                        title={'ESDEVENIMENTS'}
                        image={
                        imag1
                        }
                    />
                    </Grid>
                </Grid>
            </Box>
            
            {/* <Grid classes={gridStyles} container spacing={3} wrap={'nowrap'}>
                
            </Grid> */}
            {/* <div className="row">
                <div className="col-lg-4 text-center">
                    <a href="/quisom">
                        <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                        <div className='color-div-card'>
                            <h2 className="title-a-icon">L'AFA</h2>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 text-center">
                    <a href="/">
                        <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                        <div className='color-div-card'>
                            <h2 className="title-a-icon">SERVEIS</h2>
                        </div>        
                    </a>
                </div>
                <div className="col-lg-4 text-center">
                    <a href="/actes">
                        <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                        <div className='color-div-card'>
                            <h2 className="title-a-icon">ESPAI DE TRANSPARENCIA</h2>
                        </div>        
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 margin-left-col-lg-4 text-center">
                    <a href="/noticies">
                        <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                        <div className='color-div-card'>
                            <h2 className="title-a-icon">NOTICIES</h2>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 text-center">
                    <a href="/esdeveniments">
                        <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                        <div className='color-div-card'>
                            <h2 className="title-a-icon">ESDEVENIMENTS</h2>
                        </div>    
                    </a>
                </div>
                <div className="col-lg-4 d-none text-center">
                    <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <h2>Heading</h2>
                </div>
            </div> */}
            <hr className="featurette-divider"></hr>
        </>
    );
}

export default CardGroup;