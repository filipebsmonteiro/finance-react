import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <ScrollArea className="w-56 mx-4 my-4 shadow-lg">
      {/* <p className="pl-4 text-sm font-semibold mb-1">MAIN</p> */}
      <nav>
        <Link className="flex pl-4 p-2 rounded-lg hover:bg-gray-200" to="/dashboard">
          Home
        </Link>
        {/* <Separator /> */}

        <Link className="flex pl-4 p-2 rounded-lg hover:bg-gray-200" to="/auth/login">
          Login
        </Link>
        {/* <Separator className="mx-4 w-[85%]"  /> */}


        <p className="pl-2 font-semibold my-1">Finance</p>
        <Link className="flex pl-4 py-2 rounded-lg hover:bg-gray-200" to="/finance/balance">
          Balance
        </Link>
        <Link className="flex pl-4 py-2 rounded-lg hover:bg-gray-200" to="/finance/independence">
          Independence
        </Link>
        <Link className="flex pl-4 py-2 rounded-lg hover:bg-gray-200" to="/finance/ipca">
          IPCA
        </Link>
        <Link className="flex pl-4 py-2 rounded-lg hover:bg-gray-200" to="/finance/portfolio">
          Portfolio
        </Link>
        {/* <Separator  /> */}
      </nav>
    </ScrollArea>
  )
}

export default Sidebar;