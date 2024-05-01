import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { BookOpenText, Coffee, LayoutDashboard, LineChart, NotebookTabs, DollarSign } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { RootState } from "@/store/state";

function Sidebar() {
  const { open } = useSelector((state: RootState) => state.layout.sidebar);
  return (
    <ScrollArea
      className={`
        mx-4 my-4 bg-white rounded-lg shadow-lg transition-all duration-300
        ${open ? " w-56" : " w-14"}
      `}
    >
      {/* <p className="pl-4 text-sm font-semibold mb-1">MAIN</p> */}
      <nav>
        <Link className="flex pl-4 p-2 rounded-lg hover:bg-gray-200" to="/dashboard">
          <LayoutDashboard className="mr-4" /> Dashboard
        </Link>
        {/* <Separator /> */}

        {open ? <p className="pl-2 font-semibold mt-4 mb-1">Finance</p> : <Separator  />}
        <Link className="flex pl-4 py-2 rounded-lg hover:bg-gray-200" to="/finance/assets">
          <DollarSign className="mr-4" /> Personal Assets
        </Link>
        <Link className="flex pl-4 py-2 rounded-lg hover:bg-gray-200" to="/finance/balance">
          <Coffee className="mr-4" /> Balance
        </Link>

        <Link className="flex pl-4 py-2 rounded-lg hover:bg-gray-200" to="/finance/independence">
          <LineChart className="mr-4" /> Independence
        </Link>
        <Link className="flex pl-4 py-2 rounded-lg hover:bg-gray-200" to="/finance/ipca">
          <NotebookTabs className="mr-4" /> IPCA
        </Link>
        <Link className="flex pl-4 py-2 rounded-lg hover:bg-gray-200" to="/finance/portfolio">
          <BookOpenText className="mr-4" /> Portfolio
        </Link>
        {/* <Separator  /> */}
      </nav>
    </ScrollArea>
  )
}

export default Sidebar;