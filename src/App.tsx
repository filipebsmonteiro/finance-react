import { useRoutes } from 'react-router';
import routes from '@/router/routes'
import './App.css'

function App() {
  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  const element = useRoutes(routes);

  return (
    element
  )
}

export default App
