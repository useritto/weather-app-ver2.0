import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


export default function AdditionalCard({ weather }) {
    return(
        <Grid item xs={2}>
            <Card 
                sx={{ bgcolor: "inherit", boxShadow: 3 , '&:hover': { backgroundColor: 'rgba(0,0,0,.03)'}, }}
            >
                <Typography variant="h5" textAlign="center">
                    { weather.weekDay }
                </Typography>
                <Typography variant="subtitle2" textAlign="center">
                    { weather.date }
                </Typography>
                <CardContent>
                    <CardMedia
                        component="img"
                        sx={{ width: '7rem' }}
                        image={ weather.image }
                        alt="Condition"
                    />
                </CardContent>
                <Typography>
                    Day temperature is { weather.temperatureDay }
                </Typography>
                <Typography>
                    Night temperature is { weather.temperatureNight }
                </Typography>
                <Typography>
                    { weather.description }
                </Typography>
            </Card>
        </Grid>
    )
}

