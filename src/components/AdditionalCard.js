import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function AdditionalCard({ weather }) {
    return(
            <Card 
                sx={{ bgcolor: "inherit", boxShadow: 3 , '&:hover': { backgroundColor: 'rgba(0,0,0,.03)'}, }}
            >
                <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography textAlign="center">
                        {weather.weekDay}
                    </Typography>
                    <Typography textAlign="center">
                        {weather.date}
                    </Typography>
                    <img src={weather.image} width="96px" sx={{alignSelf: 'center'}} alt="Condition"></img>
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

