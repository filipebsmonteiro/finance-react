// import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"
import { BookOpenText, Coffee, LayoutDashboard, LineChart, NotebookTabs, DollarSign } from "lucide-react";
import { RootState } from "@/store/state";
import { useSelector } from "react-redux";


function SidebarLinks() {
  const { open } = useSelector((state: RootState) => state.layout.sidebar);
  return (
      <nav className="flex flex-col justify-center gap-1">
        <Link className="flex gap-4 p-2 rounded-lg hover:bg-gray-200" to="/dashboard">
          <LayoutDashboard /> {!open && `Dashboard`}
        </Link>
        {/* <Separator /> */}
        <Link className="flex gap-4 p-2 rounded-lg hover:bg-gray-200" to="/finance/assets">
          <DollarSign /> {!open && `Personal Assets`}
        </Link>
        <Link className="flex gap-4 p-2 rounded-lg hover:bg-gray-200" to="/finance/balance">
          <Coffee /> {!open && `Balance`}
        </Link>

        <Link className="flex gap-4 p-2 rounded-lg hover:bg-gray-200" to="/finance/independence">
          <LineChart /> {!open && `Independence`}
        </Link>
        <Link className="flex gap-4 p-2 rounded-lg hover:bg-gray-200" to="/finance/ipca">
          <NotebookTabs /> {!open && `IPCA`}
        </Link>
        <Link className="flex gap-4 p-2 rounded-lg hover:bg-gray-200" to="/finance/portfolio">
          <BookOpenText /> {!open && `Portfolio`}
        </Link>
      </nav>
  )
}

export default SidebarLinks;