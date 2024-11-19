import style from './style.module.css'; 
import { listProps } from '@/interface/interface';

const list: React.FC<listProps> = ({items, children, display = "horizontal"}) => {
    return(
        <div className={`${style.list} ${style[display]}`}>
            { items?.map(( item, index ) => (
                    <div key={index} className={style.listItem}>
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.text}</span>
                    </div>
            ))}

            {/* rendering React.ReactNode components? */}
            { children }
        </div>
    ); 
}; 

export default list;