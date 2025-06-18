import { createContext } from "react";
import Header from "../header";
export const MenuContext = createContext();
function Layout() {
    const menu = ["trang chủ ", "tin tức", "giới thiệu", "liên hệ"];
    return (
       <>
        <MenuContext.Provider value={menu}>
            <Header />
        </MenuContext.Provider>
        <div>
        
        </div>
        </> 
    );
}
export default Layout;