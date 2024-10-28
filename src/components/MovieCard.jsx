import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IMG_URL } from '../hooks/useEnv';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';

export default function MovieCard({ item }) {

  const navigate = useNavigate()

  const [changeImg, setChangeImg] = useState(false)

  function handleImgEnter() {
    setChangeImg(true);

  }

  function handleImgLeave() {
    setChangeImg(false);


  }

  return (
    <Card className='cursor-pointer ' sx={{ maxWidth: 345 }}>
      <div className='w-full relative h-[300px]' >

        <CardMedia
          onMouseEnter={handleImgEnter}
          onMouseLeave={handleImgLeave}
          className={`absolute w-full duration-300   ${changeImg ? "left-[100%]" : "left-0"} `}
          sx={{ height: 300 }}
          image={`${IMG_URL}${item.poster_path}`}
          title={item.title}
        />
        <CardMedia
          onMouseEnter={handleImgEnter}
          className={`absolute w-full duration-300    ${changeImg ? "right-0" : 'right-[100%]'}  `}
          sx={{ height: 300 }}
          image={`${IMG_URL}${item.backdrop_path}`}
          title={item.title}
        />
      </div>




      <CardContent>




        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>

        <Typography className='line-clamp-3' variant="body2" sx={{ color: 'text.secondary' }}>
          {item.overview}
        </Typography>

        <Typography className='line-clamp-3' variant="h6" sx={{ color: 'text.secondary' }}>
          {item.release_date}
        </Typography>

      </CardContent>
      <CardActions>
        <Button startIcon={<FavoriteIcon />} size="large">Like</Button>
        <Button startIcon={<ShoppingBasketIcon />} size="large">Save</Button>
        <Button onClick={() => navigate(`/movie/${item.id}`) } startIcon={<MoreHorizIcon />} size="large">More</Button>
      </CardActions>
    </Card>
  );
}

