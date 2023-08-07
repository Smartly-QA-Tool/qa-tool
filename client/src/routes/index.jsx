import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/Main";
import CodeChecker from '../pages/CodeChecker';
import CodeComparer from '../pages/CodeChecker/pages/CodeComparer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/checker", 
    element: <CodeChecker/>,
    children:[
      {
        path: "/checker",
        element: <>toots</>
      },
      {
        path: "/checker/code-comparer",
        element: <CodeComparer/>
      },

      {
        path: "/checker/code-finder",
        element: <>b</>
      },
    ]
  }
])

export { router };