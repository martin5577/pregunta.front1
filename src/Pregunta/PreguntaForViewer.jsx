import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import { PreguntaService } from '../Services/PreguntaService';


function PreguntaForViewer(){
    const [preguntas, setPreguntas] = React.useState([]);
    useEffect(() => {
      refreshList();
    }, []);

    const refreshList = async () =>{
      let service = new PreguntaService();
      let preguntas = await service.GetPreguntasForViewer();
      if (preguntas !== null) {
        setPreguntas(preguntas)
      }else{
        setPreguntas([])
      }
      
    }

    
    return(

        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} textAlign={'center'}>
                <h1>Preguntas</h1>
            </Grid>
            {preguntas.map(pregunta => {
                                return(
                                    <>
                                    <Grid item xs={12} textAlign={'center'}>
                                        <h1>{pregunta.nombre}</h1>
                                    </Grid>
                                    <Grid item xs={12} textAlign={'center'}>
                                        <img src={pregunta.imageUrl} width={"25%"} />
                                    </Grid>
                                    <Grid item xs={12} textAlign={'center'}>
                                        <p>{pregunta.descripcion}</p>
                                    </Grid>
                                    <Grid item xs={12} textAlign={'center'}>
                                        <p>{pregunta.fechaDePublicacion}</p>
                                    </Grid>
                                    <hr/>
                                    </>
                                    
                                    
                                )
                            })}
          
        </Grid>

        
      </Box>
    );
}

export {PreguntaForViewer};