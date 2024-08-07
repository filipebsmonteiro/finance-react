import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { logout } from "@/store/auth";
import { RootState, UserAuth } from "@/store/state";
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
    const {
        displayName,
        photoURL,
        email,
        ...rest
    } = useSelector((state: RootState) => state.auth.user) as UserAuth;
    const dispatch = useDispatch();

    console.log('rest :>> ', rest);
    
    return (
        <Menubar className="flex justify-end text-inherit px-4 py-2 h-auto">
            {/* <MenubarMenu>
                <MenubarLabel className="w-60 flex justify-center">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </MenubarLabel>
            </MenubarMenu> */}

            <MenubarMenu>
                {/* <div className=""> */}
                    <MenubarTrigger className="p-0 rounded-full">
                        <img
                            src={photoURL}
                            className="w-[50px] h-[50px] rounded-full"
                            alt={`${displayName} Photo`}
                        />
                    </MenubarTrigger>

                    <MenubarContent>
                        <MenubarItem>
                            {displayName}
                        </MenubarItem>
                        <MenubarItem>
                            {email}
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => dispatch(logout())}>
                            Logout <MenubarShortcut><LogOut /></MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>

                    {/* <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem inset>
                            New Window <MenubarShortcut>⌘N</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled>New Incognito Window</MenubarItem>
                        <MenubarSeparator />

                        <MenubarSub>
                            <MenubarSubTrigger>Find</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>Search the web</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Find...</MenubarItem>
                                <MenubarItem>Find Next</MenubarItem>
                                <MenubarItem>Find Previous</MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                        <MenubarSeparator />

                        <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
                        <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                        <MenubarSeparator />

                        <MenubarRadioGroup value="benoit">
                            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                        </MenubarRadioGroup>
                    </MenubarContent> */}
                {/* </div> */}
            </MenubarMenu>
        </Menubar>
    )
}

export default Navbar;
