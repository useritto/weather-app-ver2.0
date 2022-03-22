import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import AirIcon from '@mui/icons-material/Air';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import SpeedIcon from '@mui/icons-material/Speed';

export default function MainCard({ weather, city }) {
    return (
        <Container maxWidth="lx"  sx={{ mb: 3, mx: 'auto' }}> {/* #145DA0 #2E8BC0 */}
            <Card sx={{ borderRadius: 8, background: "linear-gradient(45deg, #189AB4 30%, #75E6DA 80%)"}}>
                <Box>
                    <Typography  sx={{fontSize: "2em", textAlign: "center"}} color="#effffd">
                        { city }
                    </Typography>
                    <Typography align="center" color="#e3fffc" sx={{ mt: "-10px", fontSize: "0.875rem" }}>
                        Current time is { weather.currentTime }
                    </Typography>
                </Box>
                <Container sx={{ mt: "-30px" }}>
                    <Container sx={{display: "flex", justifyContent: "center"}} >
                        <CardContent>
                            <CardMedia
                                component="img"
                                height="130"
                                image={ weather.image }
                                alt="Condition"
                            />
                        </CardContent>
                        <Typography sx={{fontSize: "2rem", alignSelf: "center"}} color="#fff">
                            { weather.temperatureDay }
                        </Typography>
                    </Container>
                    <Typography sx={{ fontSize: "1rem", mt: "-30px" }} align="center" color="#effffd">
                        { weather.condition }, feels like { weather.feelsLike }
                    </Typography>
                </Container>
                <Container display="inline" >
                    <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', my: '10px' }} >
                        <Chip icon={<AirIcon />} label={ [ weather.windSpeed,', ', weather.windDeg ] } variant="outlined" color="primary" sx={{ color: '#fff', border: '1px solid #fff' }} />
                        <Chip icon={<InvertColorsIcon />} label={ weather.pressure } variant="outlined" color="primary" sx={{ color: '#fff', border: '1px solid #fff' }} />
                        <Chip icon={<SpeedIcon />} label={ weather.humidity } variant="outlined" color="primary" sx={{ color: '#fff', border: '1px solid #fff'  }} />
                    </Stack>
                </Container>
            </Card>
        </Container>
    )
}
