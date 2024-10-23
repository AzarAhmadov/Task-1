import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { getAbout, getContact, getGalary } from "../app/features/actions";

const actionMap = {
  "/about": getAbout,
  "/contact": getContact,
  "/galary": getGalary,
};

const HomeLayout = () => {
  const dispatch = useDispatch();

  const getActions = (pathname) => {
    const action = actionMap[pathname];
    if (action) {
      dispatch(action());
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center mx-auto container flex-col text-center gap-y-10">
        <Outlet />
        <Button onClick={getActions}>Execute Action</Button>
      </div>
    </>
  );
};

export default HomeLayout;
