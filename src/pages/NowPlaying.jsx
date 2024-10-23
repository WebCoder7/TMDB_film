import React, { useEffect, useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import { API_KEY, IMG_URL } from '../hooks/useEnv'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function NowPlaying() {
  const [data, setData] = useState([])
  console.log(data)

  useEffect(() => {
    useAxios().get(`/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`).then(res => {
      setData(res.data.results)
    })
  }, [])

  return (
    <div className='p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
      {data.map(item => <Card key={item.id} sx={{ maxWidth: 345 }}>
        <CardMedia
        
          sx={{ height: 300 }}
          image={`${IMG_URL}${item.backdrop_path}`}
          title={item.original_title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h2 className='font-bold'>{item.original_title}</h2>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.overview}
          </Typography>
        </CardContent>
        <CardActions >
          <Button className="hover:text-red-500 transition-colors duration-300"   size="large"><FavoriteBorderIcon/></Button>
          <Button  className="hover:text-red-500 transition-colors duration-300"   size="large"><ShoppingBasketIcon/></Button>
        </CardActions>
      </Card>)}
    </div>
  )
}

export default NowPlaying