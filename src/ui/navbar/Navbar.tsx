import { listItem } from "@/interface/interface";
import List from "@/ui/reusable/list/List";
import style from './style.module.css'; 

const Navbar : React.FC = () => {

    const navLinks: listItem[] = [
        {
            text: "about"
        }, 
        {
            text: "contact us"
        }, 
        {
            text: "templates"
        }
    ]

    return (
        <div className={style.navbar}>
            <List items={navLinks} display="horizontal">
            </List>
        </div>
    )
}; 

export default Navbar;