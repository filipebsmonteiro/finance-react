import { Outlet } from 'react-router'
import Sidebar from '@/components/navigation/Sidebar'
import Navbar from '@/components/navigation/Navbar'
import { ScrollArea } from '@/components/ui/scroll-area'
import BreadCrumb from '@/components/navigation/BreadCrumb'
import { useSelector } from "react-redux";

function PanelLayout() {
  const { open } = useSelector((state: any) => state.sidebar);

  return (
    <>
      <Navbar />
      <div className='flex flex-1'>
        {open && <Sidebar />}

        <ScrollArea className='flex-1 p-4'>
          <BreadCrumb />

          {/* <div className="flex justify-between items-center mb-6">
            <p className="text-2xl font-semibold mb-2 lg:mb-0">Hello, Filipe!</p>
            <button className="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow">View Info</button>
          </div> */}

          <Outlet />
        </ScrollArea>
      </div>
    </>
  )
}

export default PanelLayout
