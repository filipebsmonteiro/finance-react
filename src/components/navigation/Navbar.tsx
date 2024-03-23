import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
    MenubarLabel
} from "@/components/ui/menubar"
import viteLogo from '/vite.svg'
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { toggle } from "@/store/sidebar";

function Navbar() {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Menubar className="text-inherit justify-between px-2 py-6">
            <MenubarMenu>
                <MenubarLabel className="w-60 flex justify-center">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </MenubarLabel>
            </MenubarMenu>

            <MenubarMenu>
                <div className="flex flex-1 justify-between">
                    <MenubarLabel>
                        <button onClick={() => dispatch(toggle())}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
                                <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                                <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                                <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </MenubarLabel>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
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
                    </MenubarContent>
                </div>
            </MenubarMenu>
        </Menubar>
    )
}

export default Navbar;
