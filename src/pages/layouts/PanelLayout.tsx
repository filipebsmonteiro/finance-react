import { Outlet } from 'react-router'
import LeftMenu from '@/components/navigation/LeftMenu'
import TopMenu from '@/components/navigation/TopMenu'

function PanelLayout() {

  return (
    <div className='flex flex-col w-full h-full'>
      <TopMenu />
      <div className='flex flex-grow'>
        <LeftMenu />
        <div className='container'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default PanelLayout
