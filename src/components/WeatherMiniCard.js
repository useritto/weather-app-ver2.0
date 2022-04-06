import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function WeatherMiniCard({ weather }) {
    return(
            <Card sx={{ width: "256px", borderRadius: 6, bgcolor: "inherit", boxShadow: 3, "&:hover": { backgroundColor: "rgba(0,0,0,.03)"}, }}>
                <CardContent sx={{display: "flex", flexDirection: "column", px: "16px", pt: "24px"}}>
                    <Typography textAlign="center">
                        {weather.weekDay}
                    </Typography>
                    <Typography textAlign="center">
                        {weather.date}
                    </Typography>
                    <img src={weather.image} width="96px" alt="Condition" style={{ alignSelf: "center" }}></img>
                    <Typography textAlign="left">
                        {weather.temperatureDay}
                    </Typography>
                    <Typography textAlign="left" sx={{ opacity: "0.5" }}>
                        {weather.temperatureNight}
                    </Typography>
                    <Typography textAlign="left" sx={{ opacity: "0.5" }}>
                        {weather.description}
                    </Typography>
                </CardContent>
            </Card>
    )
}

