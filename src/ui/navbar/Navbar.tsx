import { listItem } from "@/interface/interface";
import List from "@/ui/reusable/list/List";
import style from './style.module.css'; 
import justToolsLogo from '@/assets/justtools-logo.svg'; 

const Navbar : React.FC = () => {

    const navLinks: listItem[] = [
        {
            icon: justToolsLogo,
            text: "Just Tools",
        },
        // {
        //     text: "about",
        //     link: "/about"
        // }, 
        // {
        //     text: "community",
        //     link: "/contact"
        // }, 
        // {
        //     text: "templates",
        //     link: "/templates"
        // }
    ]

    return (
        <div className={style.navbar}>
            <List items={navLinks} display="horizontal">
            </List>
        </div>
    )
}; 

export default Navbar;