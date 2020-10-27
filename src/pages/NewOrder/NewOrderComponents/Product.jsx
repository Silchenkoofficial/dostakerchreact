import React, { useState } from 'react';
import InputBlock from './InputBlock';
// import classnames from 'classnames';

function Product() {
    const products = ["Документы", "Подарок", "Горячая еда", "Продукты", "Цветы", "Торт", "Другое"];
    const [activeProduct, setActiveProduct] = useState('Документы');

    return (
        <div className="product">
            <InputBlock
                svg={
                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.653 1.83361L15.1883 4.90423L17.5014 6.44626V9.33361H16.5258C16.1826 8.36261 15.2566 7.66694 14.168 7.66694C13.0795 7.66694 12.1535 8.36261 11.8103 9.33361H8.19246C7.84927 8.36261 6.92323 7.66694 5.83472 7.66694C4.7462 7.66694 3.82017 8.36261 3.47697 9.33361H2.50138V1.83361H13.653ZM17.5014 11.0003H16.5258C16.1826 11.9713 15.2566 12.6669 14.168 12.6669C13.0795 12.6669 12.1535 11.9713 11.8103 11.0003H8.19246C7.84926 11.9713 6.92323 12.6669 5.83472 12.6669C4.7462 12.6669 3.82017 11.9713 3.47697 11.0003H2.50138C1.58091 11.0003 0.834717 10.2541 0.834717 9.33361V1.83361C0.834717 0.913133 1.58091 0.166941 2.50138 0.166941H13.653C14.2843 0.166941 14.8614 0.523611 15.1437 1.08825L16.4811 3.76299L19.168 5.55429V9.33361C19.168 10.2541 18.4219 11.0003 17.5014 11.0003ZM6.66805 10.1669C6.66805 10.6272 6.29495 11.0003 5.83472 11.0003C5.37448 11.0003 5.00138 10.6272 5.00138 10.1669C5.00138 9.7067 5.37448 9.33361 5.83472 9.33361C6.29495 9.33361 6.66805 9.7067 6.66805 10.1669ZM15.0014 10.1669C15.0014 10.6272 14.6283 11.0003 14.1681 11.0003C13.7078 11.0003 13.3347 10.6272 13.3347 10.1669C13.3347 9.7067 13.7078 9.33361 14.1681 9.33361C14.6283 9.33361 15.0014 9.7067 15.0014 10.1669Z" fill="#FF5C00" />
                    </svg>
                }
                labelText="Что везем?"
                product={activeProduct}
                value={activeProduct}
                placeholder=''
                isDisabled />
            <div className="choice-product">
                <ul className="choice__list">
                    {
                        products.map((item, index) => 
                            <li
                                key={index}
                                className="choice__list--link"
                                onClick={() => setActiveProduct(products[index])}
                            >{item}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Product;
