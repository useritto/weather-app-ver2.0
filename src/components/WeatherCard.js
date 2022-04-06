import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import AirIcon from '@mui/icons-material/Air';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import SpeedIcon from '@mui/icons-material/Speed';

import { useTranslation } from 'react-i18next';

export default function WeatherCard({ weather, city, language }) {
    const { t } = useTranslation();
    const airLabel = `${weather.windSpeed} ${t("m_per_sec")}, ${t(`wind_direction.${weather.windDeg}`)}`, pressureLabel = `${weather.pressure} ${t("mm_Hg")}`;

    return (
        <Container maxWidth='xl'  sx={{ mb: 3, mx: 'auto' }}> 
            <Card sx={{ borderRadius: 8, background: "linear-gradient(45deg, #189AB4 20%, #75e687 70%, rgba(224,212,70,1) 100%)"}}>
                <Typography  sx={{fontSize: "2em", textAlign: "center"}} color="#effffd">
                    {city[language]}
                </Typography>
                <Typography align="center" color="#e3fffc" sx={{ mt: "-5px", fontSize: "0.875rem" }}>
                    {t("current_time")} {weather.currentTime}
                </Typography>
                <Container sx={{display: "flex", flexDirection: 'row', justifyContent: "center", my: -3}} >
                    <img src={weather.image} width="128px" sx={{alignSelf: 'center'}} alt="Condition"></img>
                    <Typography sx={{fontSize: "3rem", alignSelf: "center"}} color="#fff">
                        {weather.temperatureDay}
                    </Typography>
                </Container>
                <Typography sx={{ fontSize: "1rem" }} align="center" color="#effffd">
                    {weather.description}, {t("feels_like")} {weather.feelsLike}
                </Typography>
                <Container display="inline" >
                    <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', my: '10px' }} >
                        <Chip icon={<AirIcon />} label={airLabel} variant="outlined" color="primary" sx={{ color: '#fff', border: '1px solid #fff' }} />
                        <Chip icon={<InvertColorsIcon />} label={pressureLabel} variant="outlined" color="primary" sx={{ color: '#fff', border: '1px solid #fff' }} />
                        <Chip icon={<SpeedIcon />} label={ weather.humidity } variant="outlined" color="primary" sx={{ color: '#fff', border: '1px solid #fff'  }} />
                    </Stack>
                </Container>
            </Card>
        </Container>
    )
}


// <Container maxWidth='xl'  sx={{ mb: 3, mx: 'auto' }}> {/* #145DA0 #2E8BC0 75E6DA*/}
//             <Card sx={{ borderRadius: 8, background: "linear-gradient(45deg, #189AB4 20%, #75e687 70%, rgba(224,212,70,1) 100%)"}}>
//                 <Box>
//                     <Typography  sx={{fontSize: "2em", textAlign: "center"}} color="#effffd">
//                         {city}
//                     </Typography>
//                     <Typography align="center" color="#e3fffc" sx={{ mt: "-10px", fontSize: "0.875rem" }}>
//                         Current time is {weather.currentTime}
//                     </Typography>
//                 </Box>
//                 <Container sx={{ mt: "-30px" }}>
//                     <Container sx={{display: "flex", justifyContent: "center"}} >
//                         <CardContent>
//                             <CardMedia
//                                 component="img"
//                                 height="130"
//                                 image={weather.image}
//                                 alt="Condition"
//                             />
//                         </CardContent>
//                         <Typography sx={{fontSize: "2rem", alignSelf: "center"}} color="#fff">
//                             {weather.temperatureDay}
//                         </Typography>
//                     </Container>
//                     <Typography sx={{ fontSize: "1rem", mt: "-30px" }} align="center" color="#effffd">
//                         {weather.condition}, feels like {weather.feelsLike}
//                     </Typography>
//                 </Container>
//                 <Container display="inline" >
//                     <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', my: '10px' }} >
//                         <Chip icon={<AirIcon />} label={ [ weather.windSpeed,', ', weather.windDeg ] } variant="outlined" color="primary" sx={{ color: '#fff', border: '1px solid #fff' }} />
//                         <Chip icon={<InvertColorsIcon />} label={ weather.pressure } variant="outlined" color="primary" sx={{ color: '#fff', border: '1px solid #fff' }} />
//                         <Chip icon={<SpeedIcon />} label={ weather.humidity } variant="outlined" color="primary" sx={{ color: '#fff', border: '1px solid #fff'  }} />
//                     </Stack>
//                 </Container>
//             </Card>
//         </Container>