import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

function LeftMenu() {
  return (
    <ScrollArea className="w-48 h-full flex flex-grow shadow shadow-black">
      <nav className="p-4 ">
        {/* <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4> */}
        {/* <div className="text-sm"></div> */}

        <Link to="/home">Home</Link>
        <Separator className="my-2" />

        <Link to="/auth/sigin">Login</Link>
        <Separator className="my-2" />
        {/*tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))*/}
      </nav>
    </ScrollArea>
  )
}

export default LeftMenu;