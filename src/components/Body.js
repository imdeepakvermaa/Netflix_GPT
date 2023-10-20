
import Login from './Login';
import Browse from './Browse';
import Header from './Header';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';



const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Header/>

        },
        
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }


    ]);



  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
      
  );
};

export default Body;