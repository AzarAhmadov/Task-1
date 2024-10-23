import HomeLayout from "../layout/HomeLayout";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import GalaryPage from "../pages/GalaryPage";

const router = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "about",
        element: <GalaryPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "galary",
        element: <GalaryPage />,
      },
    ],
  },
];

export default router;
