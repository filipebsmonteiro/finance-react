import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

function LeftMenu() {
  return (
    <ScrollArea className="w-60 mx-2 my-4 px-2 py-4 bg-gray-800 text-gray-100 rounded-lg">
      {/* <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">Sidebar</span>
      </div> */}
      {/* <div className="flex flex-col flex-1 overflow-y-auto rounded"> */}
          <nav className="">
              <Link className="hover:bg-gray-700" to="/home">
                Home
              </Link>
              <Separator className="my-2" />

              <Link className="hover:bg-gray-700" to="/auth/login">
                Login
              </Link>
              <Separator className="my-2" />
          </nav>
      {/* </div> */}
    </ScrollArea>
  )
}

export default LeftMenu;