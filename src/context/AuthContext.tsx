import { error } from "console";
import { createContext, useEffect, useReducer, useState, ReactNode, Dispatch } from "react";

interface User {
  // Define the structure of the user object
  // Add the necessary properties
  User_Name: string,
  User_Email: string,
  User_Roll: string,
  User_Phone: string,
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: any; // Replace 'any' with the appropriate error type
}

 interface AuthAction {
  type: string;
  payload?: User | any; // Replace 'any' with the appropriate payload type
}

 interface AuthContextProps {
  user: User | null;
  loading: boolean;
  error: any; // Replace 'any' with the appropriate error type
  disspatch: Dispatch<AuthAction>;
}

const INITIAL_STATE: AuthState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : {} as User,
  loading: false,
  error: null,
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, disspatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user) ?? null);
  }, [state.user]);

  return (
    <>
      <AuthContext.Provider value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        disspatch,
      }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
