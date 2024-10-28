import { useEffect, useState } from "react"
import { useAxios } from "../hooks/useAxios"
import { API_KEY, IMG_URL } from "../hooks/useEnv"
import { useParams } from "react-router-dom"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function SingleMovie() {
  const { id } = useParams()
  const [singleData, setSingleData] = useState({})




  useEffect(() => {
    useAxios().get(`/movie/${id}?api_key=${API_KEY} `).then(res => setSingleData(res.data))
  }, [])

  console.log(singleData);



  return (
    <div className="flex  justify-between p-5">

      <div className="p-5 rounded-md border-[2px]  h-[85vh] overflow-y-auto border-slate-500 w-[20%] "></div>

      <div className="p-5 rounded-md border-[2px] h-[85vh] overflow-y-auto border-slate-500 w-[50%] ">
        <h2 className="font-bold text-[33px] text-center mb-5 ">{singleData.title}</h2>
        <img src={`${IMG_URL}${singleData.poster_path}`} alt="Movie img" className="w-100% rounded-md mb-5 " />
        <p className="text-[20px] text-slate-400 ">{singleData.overview}</p>
        <div className="flex items-center space-x-5 mt-5" >
          <strong className="text-[20px] ">Genres:</strong>
          {singleData.genres?.map(item  => (
            <Button  variant="outlined" size="large">
              {item.name}
            </Button>
          ))}
        </div>


      </div>


      <div className="p-5 rounded-md border-[2px] h-[85vh] overflow-y-auto border-slate-500 w-[29%] "></div>


    </div>
  )
}

export default SingleMovie
