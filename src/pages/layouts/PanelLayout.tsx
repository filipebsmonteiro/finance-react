import { Outlet, useLocation } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { setTitle } from "@/store/layout"
import Sidebar from '@/components/navigation/Sidebar'
import Navbar from '@/components/navigation/Navbar'
import { ScrollArea } from '@/components/ui/scroll-area'
import BreadCrumb from '@/components/navigation/BreadCrumb'
import { useEffect } from 'react'

function PanelLayout() {
  const { title } = useSelector((state: any) => state.layout.header);

  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => { 
      return () => {dispatch(setTitle(null))}
  }, [location])


  return (
    <>
      <Navbar />
      <div className='flex flex-1'>
        <Sidebar />

        <ScrollArea className='flex-1 p-4'>
          <BreadCrumb />

          {title && <div className="flex justify-between items-center mb-6">
            <p className="text-2xl font-semibold mb-2 lg:mb-0">{title}</p>
            {/* <button className="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow">View Info</button> */}
          </div>}

          <Outlet />
        </ScrollArea>
      </div>
    </>
  )
}

export default PanelLayout
