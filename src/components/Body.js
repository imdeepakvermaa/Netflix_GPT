
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter,  } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import MainPage from './MainPage';



const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <MainPage/>

        },
        
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },


    ]);





  return (
    <div >
        <RouterProvider router={appRouter}/>
    </div>
      
  );
};

export default Body;