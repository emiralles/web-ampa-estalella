// import imag1 from './images/IMG_1028.JPG'
// import imag2 from './images/IMG_1018.JPG'
// import imag3 from './images/IMG_1029.JPG'

import { useState, useEffect } from "react";
import { getAllCollections, getUrlImage } from "../../db/crudDB";
import { itemcarousel } from "../../models/itemCarousel";


import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
//import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];


function Carousel() {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    //const [maxSteps, setmaxSteps] = React.useState(1);
    //let maxSteps = 0; //images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };


    const [listEsdeveniments,setListEsdeveniments] = useState([]);

    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('carousel');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
              let imgUrl = getUrlImage(doc.path);
              imgUrl.then((rstUrl)=>{
                let item = new itemcarousel(doc.id,doc.path,"",doc.title,doc.dateCreation,doc.namePhoto,rstUrl); 
                setListEsdeveniments(arr => [...arr, item]);
                
            });
            })
          })
        }
        
        handleLoad();
        //setmaxSteps(listEsdeveniments.length);
        //maxSteps = listEsdeveniments.length;
    
    },[]);

    if(listEsdeveniments != null && listEsdeveniments.length > 0)
    {
        return(
            <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 80,
                    pl: 1,
                    bgcolor: 'background.default',
                    }}
                >
                    {/* <Typography>{images[activeStep].label}</Typography> */}
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {listEsdeveniments.map((step, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                            component="img"
                            sx={{
                            height: window.innerWidth > 1024 ? 655:255,
                            display: 'block',
                            maxWidth: '100%',
                            overflow: 'hidden',
                            width: '100%',
                            }}
                            src={step.urlPhoto}
                            alt={index}
                        />
                        ) : null}
                    </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={listEsdeveniments.length}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === listEsdeveniments.length - 1}
                    >
                    </Button>
                    }
                    backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    </Button>
                    }
                />
            </Box>
        );
        
    }
    else
    {
        return(<></>);
    }
        
    
}

export default Carousel;