import { listProps } from "@/interface/interface";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const List: React.FC<listProps> = ({ items, display = "vertical" }) => {
    return (
        <div className={`${style.list} ${style[display]}`}>
            {items?.map((item, index) => (
                <div key={index} className={style.listItem}>
                    {/* Render the icon */}
                    {item.icon && (
                        <span className={style.icon}>
                            {typeof item.icon === "string" ? (
                                <img src={item.icon} alt={`${item.text} icon`} className={style.iconImage} />
                            ) : (
                                item.icon
                            )}
                        </span>
                    )}
                    {/* Render the link or text */}
                    {item.link ? (
                        <Link to={item.link} className={style.link}>
                            {item.text}
                        </Link>
                    ) : (
                        <span><a href={item.link}>{item.text}</a></span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default List;
