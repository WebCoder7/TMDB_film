import { Route, Routes } from 'react-router-dom'
import { PATH } from '../hooks/usePath'
import { NowPlaying, Popular, SingleMovie, TopRated, UpComing  } from '../pages'

function CustomRoutes() {
    const routeList = [
        {
            id: 1,
            path: PATH.nowPlaying,
            element: <NowPlaying />
        },
        {
            id: 2,
            path: PATH.popoular,
            element: <Popular />
        },
        {
            id: 3,
            path: PATH.topRated,
            element: <TopRated />
        },
        {
            id: 4,
            path: PATH.upComing,
            element: <UpComing />
        },{
            id: 5,
            path: PATH.singleMovie,
            element: <SingleMovie />
        },
    ]

    return (
        <Routes>
            {routeList.map(item =>
                <Route
                    key={item.id}
                    path={item.path}
                    element={item.element}
                />)}
        </Routes>
    )
}

export default CustomRoutes