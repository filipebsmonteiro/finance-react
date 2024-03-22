import { Outlet } from 'react-router-dom'
import Navbar from '@/components/navigation/Navbar'

function AuthLayout() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}

export default AuthLayout
