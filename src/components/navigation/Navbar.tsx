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
import { Menu } from "lucide-react";

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
                            <Menu />
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
