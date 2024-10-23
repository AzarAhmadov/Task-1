import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../common/Header";
import Button from "../ui/Button";
import { getMyActions } from "../app/features/actions";

const HomeLayout = () => {
  const pages = getMyActions();
  const { pathname } = useLocation();

  const currentPage = pages.find((page) => page.pageName === pathname);

  if (!currentPage) {
    console.log("Bu sehifede movcud bir action yoxdur");
  }

  return (
    <>
      <Header />
      <div className="container flex flex-col justify-center mx-auto text-center gap-y-10">
        <Outlet />

        {currentPage ? (
          currentPage.actions.map((item) => (
            <Button actions={item}>{item}</Button>
          ))
        ) : (
          <div>Bu sehifede movcud bir action yoxdur</div>
        )}
      </div>
    </>
  );
};

export default HomeLayout;
