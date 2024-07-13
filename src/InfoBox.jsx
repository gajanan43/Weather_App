import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
    // const INIT_URL = "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291cmNlfGVufDB8fDB8fHww";

    const HOT_URL = "https://media.istockphoto.com/id/1322096928/photo/hot-summer-sunlight-rays-pouring-through-human-hand-hand-covering-sun-light-heat-temperature.jpg?s=2048x2048&w=is&k=20&c=iUUyyr7Eh92XLWDA23RQVEVoLU7vviTOc-38E4NYCjQ=";
    const COLD_URL = "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW58ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }} image={info.humidity > 80 ? COLD_URL : info.temp > 15 ? HOT_URL : RAIN_URL} title="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"> {info.city}{info.humidity > 80 ? <AcUnitIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <ThunderstormIcon />} </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature:{info.temp}&deg;C</p>
                            <p>Humidity:{info.humidity}</p>
                            <p>Min Temp:{info.tempMin}&deg;C</p>
                            <p>Max Temp:{info.tempMax}&deg;C</p>
                            <p>
                                The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}