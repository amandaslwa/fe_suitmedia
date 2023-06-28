import { NavbarItems } from "./NavbarItems";
import MapItems from "./MapItems";

const Navbar = () => {
    return (
        <nav className="top-nav">
            <ul className="menus">
                {NavbarItems.map((menu, index) => {
                    return (
                        <MapItems items={menu} key={index} />
                    );
                })}
            </ul>
        </nav>
    )
}
export default Navbar;