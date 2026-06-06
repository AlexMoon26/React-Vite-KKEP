import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout.jsx";
import { FeedbackPage } from "./pages/FeedbackPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { LearnPage } from "./pages/LearnPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "learn",
        element: <LearnPage />,
      },
      {
        path: "feedback",
        element: <FeedbackPage />,
      },
    ],
  },
]);
