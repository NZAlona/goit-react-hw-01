
import { Profile } from "./Profile/Profile";
import userData from "../userData.json";
import  "../index.css"


export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag} 
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
    </>
  );
};

