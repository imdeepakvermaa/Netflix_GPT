import { useEffect } from "react";
import { LogoUrl } from "../utils/constants";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        
        navigate('/browse')

      } else {
        dispatch(removeUser());
        
      navigate('/login')
      }

    });
    return () => unsubscribe;
  }, []);
  return (
    <div>
      <img className=" h-[70px]" src={LogoUrl} alt="logo" />
    </div>
  );
};

export default Header;
