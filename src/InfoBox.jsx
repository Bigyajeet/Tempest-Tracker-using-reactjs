import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './InfoBox.css'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    const imgint="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHl8ZW58MHx8MHx8fDA%3D";
    const Hot_Url='https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D'
    const cold_Url="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const Rain_Url="https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

    return(<div className="Weatherinfo">

        <div className='cardContainer'>

        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
          
              info.temp<15
              ?cold_Url
              : info.temp>15
              ?Hot_Url
              : Rain_Url

            }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{
              info.temp<15
              ?<ThunderstormIcon/>
              : info.temp>15
              ?<WbSunnyIcon/>
              : <SevereColdIcon/>

            }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
           <p>Temperature: {info.temp}&deg;C</p>
              <p>Max Temp: {info.temp_max}&deg;C</p>
              <p>Min Temp: {info.temp_min}&deg;C</p>
              <p>The weather is described as {info.weather} and feels like {info.feels_like}&deg;C</p>

          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>
    </div>)
}