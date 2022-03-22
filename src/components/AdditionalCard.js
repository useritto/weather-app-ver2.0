import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


export default function AdditionalCard({ weather }) {
    return(
            <Card 
                sx={{ bgcolor: "inherit", boxShadow: 3 , '&:hover': { backgroundColor: 'rgba(0,0,0,.03)'}, }}
            >     
                <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography textAlign="center">
                        { weather.weekDay }
                    </Typography>
                    <Typography textAlign="center">
                        { weather.date }
                    </Typography>

                    <img src={weather.image} width="96px" style={{alignSelf: 'center'}}></img>

                    <Typography>
                        {weather.temperatureDay}
                    </Typography>
                    <Typography sx={{ opacity: '0.5' }}>
                        {weather.temperatureNight}
                    </Typography>
                    <Typography sx={{ opacity: '0.5' }}>
                        {weather.description}
                    </Typography>
                </CardContent>
            </Card>
    )
}

