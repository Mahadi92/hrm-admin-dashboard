import React, { useContext, useState, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// layout constants
import { LayoutTypes } from "../constants/layout";

// strore
import { RootState } from "../redux/store";

// All layouts containers
import DefaultLayout from "../layouts/Default";
import VerticalLayout from "../layouts/Vertical";
import DetachedLayout from "../layouts/Detached";
import HorizontalLayout from "../layouts/Horizontal/";
import TwoColumnLayout from "../layouts/TwoColumn/";

import {
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
  authProtectedRoutes,
  authProtectedEmployeFlattenRoutes,
} from "./index";

import { APICore } from "../helpers/api/apiCore";
import { AuthContext } from "../context/AuthContext";

interface RoutesProps {}

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const AllRoutes = (props: RoutesProps) => {
  const { layout } = useSelector((state: RootState) => ({
    layout: state.Layout,
  }));

  // console.log(authProtectedRoutes);

  const getLayout = () => {
    let layoutCls = TwoColumnLayout;

    switch (layout.layoutType) {
      case LayoutTypes.LAYOUT_HORIZONTAL:
        layoutCls = HorizontalLayout;
        break;
      case LayoutTypes.LAYOUT_DETACHED:
        layoutCls = DetachedLayout;
        break;
      case LayoutTypes.LAYOUT_VERTICAL:
        layoutCls = VerticalLayout;
        break;
      default:
        layoutCls = TwoColumnLayout;
        break;
    }
    return layoutCls;
  };

  let Layout = getLayout();
  const api = new APICore();

  const { disspatch, user } = useContext(AuthContext);
  console.log("user", user);
  // const userLoggedIn = user?.User_Roll === "Admin"
  // const userEmpLoggedIn = user?.User_Roll === "Employee"
  // console.log('user logged in', userLoggedIn, userEmpLoggedIn)

  const userrole: any = localStorage.getItem("role")
    ? JSON.parse(localStorage.getItem("role")!)
    : null;

  // const { user } = useContext(AuthContext);
  // const userRole = user?.User_Roll?.trim();
  console.log("userRole 71", typeof userrole);

  const navigate = useNavigate();

  // const ProtectedRoute = ({ children:any }) => {
  //   const { user } = useContext(AuthContext);
  //   if (!user) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return (
        <Navigate
          to={{
            pathname: "/auth/login",
          }}
        />
      );
    }

    return <>{children}</>;
  };

  return (
    <>
      <Routes>
        <Route>
          {publicProtectedFlattenRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <DefaultLayout {...props} layout={layout}>
                  {route.element}
                </DefaultLayout>
              }
              key={idx}
            />
          ))}
        </Route>

        {/* <Route>
          {authProtectedFlattenRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                userrole.trim() === "Admin" ? (
                  <Navigate
                    to={{
                      pathname: "auth/login",
                      search: "next=" + route.path
                    }}
                  />
                ) : (
                  <Layout {...props}>{route.element}</Layout>
                )
              }
              key={idx}
            />
          ))}
        </Route> */}

        <Route
          path="*"
          element={
            <ProtectedRoute>
              <DefaultLayout {...props} layout={layout}></DefaultLayout>
            </ProtectedRoute>
          }
        />

        <Route>
          <>
            {userrole === "Admin" && (
              <>
                {authProtectedFlattenRoutes.map((route, idx) => (
                  <Route
                    path={route.path}
                    element={
                      userrole === null ? (
                        <Navigate
                          to={{
                            pathname: "auth/login",
                            search: "next=" + route.path,
                          }}
                        />
                      ) : (
                        <Layout {...props}>{route.element}</Layout>
                      )
                    }
                    key={idx}
                  />
                ))}
              </>
            )}
          </>
        </Route>

        <Route>
          <>
            {userrole === "Employee" && (
              <>
                {authProtectedEmployeFlattenRoutes.map((route, idx) => (
                  <Route
                    path={route.path}
                    element={
                      userrole === null ? (
                        <Navigate
                          to={{
                            pathname: "auth/login",
                            search: "next=" + route.path,
                          }}
                        />
                      ) : (
                        <Layout {...props}>{route.element}</Layout>
                      )
                    }
                    key={idx}
                  />
                ))}
              </>
            )}
          </>
        </Route>

        {/* <Route>
          <ProtectedRoute>
            {
              userrole === "Admin" && (
                {
                  authProtectedFlattenRoutes.map((route, idx) => (
                    <Route
                      path={route.path}
                      element={
                        userrole !== "Admin" ? (
                          <Navigate
                            to={{
                              pathname: "auth/login",
                              search: "next=" + route.path
                            }}
                          />
                        ) : (
                          <Layout {...props}>{route.element}</Layout>
                        )
                      }
                      key={idx}
                    />
                  ))
                }

              )
            }
          </ProtectedRoute>
        </Route> */}

        {/* {
          userrole === "Employee" &&
          <Route>
            {authProtectedEmployeFlattenRoutes.map((route, idx) => (
              <Route
                path={route.path}
                element={
                  api.isUserAuthenticated() === false ? (
                    <Navigate
                      to={{
                        pathname: "auth/login",
                        search: "next=" + route.path
                      }}
                    />
                  ) : (
                    <Layout {...props}>{route.element}</Layout>
                  )
                }
                key={idx}
              />
            ))}
          </Route>
        } */}
      </Routes>
    </>
  );
};

export default AllRoutes;
