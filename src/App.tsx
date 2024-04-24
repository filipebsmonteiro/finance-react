import { useRoutes } from 'react-router'
// import { RouterProvider } from 'react-router-dom'
// import router from '@/router/index'
import routes from '@/router/routes'

import './App.css'

function App() {
  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  const element = useRoutes(routes);

  return (
    <div className="flex flex-col overflow-y-auto h-screen bg-blue-100">
      {/* <RouterProvider router={router} /> */}
      {element}
    </div>
  )
}

export default App
