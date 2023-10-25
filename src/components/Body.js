import { useEffect } from 'react';
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from './Login';
import Browse from './Browse';
import Header from './Header';
import { createBrowserRouter,  } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser , removeUser } from '../utils/userSlice';



const Body = () => {

    const dispatch = useDispatch();

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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid , email , displayName , photoURL} = user;
              dispatch(addUser({uid: uid , email: email , displayName: displayName , photoURL: photoURL ,}));


            } else {
                dispatch(removeUser());


            }
          });

    } , [])



  return (
    <div className='bg-black'>
        <RouterProvider router={appRouter}/>
    </div>
      
  );
};

export default Body;