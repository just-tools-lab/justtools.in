import { productProps } from '@/interface/interface';
import style from './style.module.css'; 

const Product: React.FC<productProps> = ({ productContent, direction = "row" }) => {
    return (
        <div className={`${style.productContainer}`}>
            {productContent?.map((product, index) => (
                <div key={index} className={`${style.product} ${style[direction]}`}>
                    {product.heroImage && (
                        <div className={style.heroImage}>
                            <img src={product.heroImage} alt={`${product.title} hero`} />
                        </div>
                    )}
                    <div className={style.content}>
                        {product.icon && (
                            <div className={style.icon}>
                                {typeof product.icon === 'string' ? (
                                    <img src={product.icon} alt={`${product.title} icon`} />
                                ) : (
                                    product.icon
                                )}
                            </div>
                        )}
                        <h3 className={style.title}>{product.title}</h3>
                        <p className={style.description}>{product.description}</p>
                        <div className={style.buttons}>
                            {product.buttons?.map((button, btnIndex) => (
                                <a
                                    key={btnIndex}
                                    href={button.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={style.button}
                                >
                                    {button.icon && (
                                        <span className={style.buttonIcon}>
                                            {typeof button.icon === 'string' ? button.icon : button.icon}
                                        </span>
                                    )}
                                    <span>{button.text}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
