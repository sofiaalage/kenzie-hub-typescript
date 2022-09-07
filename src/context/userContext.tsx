import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";


type TechType = {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

type WorkType = {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: string;
  updated_at: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: TechType[];
  works: WorkType[];
  created_at: string;
  updated_at: string;
  avatar_url: string;
}

interface IuserProvider {
  children:any;
}

interface IUserData {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}


export const UserContext = createContext<IUserData>({} as IUserData);

export const UserProvider = ({ children }: IuserProvider) => {

  const [user, setUser] = useState<IUser>({} as IUser);
  
  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token != null) {
      fetch("https://kenziehub.herokuapp.com/profile", {
        method: "GET",
        headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((response) => setUser(response))
        .catch((error) => {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};



const useUserContext = () => useContext(UserContext);

export { useUserContext };
