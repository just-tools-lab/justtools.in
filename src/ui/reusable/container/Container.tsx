import style from './style.module.css'; 
import { containerProps } from '@/interface/interface';

const Container : React.FC<containerProps> = ({ containerContent, display = "horizontal" }) => {
    return(
        <div className={`${style.container} ${style[display]}`}>
            {
                containerContent?.map((content, index) => {
                    return(
                        <div className={style.containerContent} key={index}>
                            { content }
                        </div>
                    )
                })
            }

        </div>
    )
}; 

export default Container;