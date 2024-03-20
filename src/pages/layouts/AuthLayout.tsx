import { Outlet } from 'react-router-dom'
import TopMenu from '@/components/navigation/TopMenu'

function AuthLayout() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <TopMenu />
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}

export default AuthLayout
