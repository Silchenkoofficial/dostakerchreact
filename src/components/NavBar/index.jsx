import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

function NavBar() {
    const pages = [
        {
            name: 'Заказы',
            svg: 
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.4966 1.66668C6.1235 1.13582 7.03261 0.833344 8 0.833344C8.96739 0.833344 9.8765 1.13582 10.5034 1.66668H11.3333C12.2538 1.66668 13 2.41287 13 3.33334L13.8333 3.33334C14.7538 3.33334 15.5 4.07954 15.5 5.00001V17.5C15.5 18.4205 14.7538 19.1667 13.8333 19.1667H2.16667C1.24619 19.1667 0.5 18.4205 0.5 17.5V5.00001C0.5 4.07954 1.24619 3.33334 2.16667 3.33334L3 3.33334C3 2.41287 3.74619 1.66668 4.66667 1.66668H5.4966ZM11.3333 5.83334C11.9502 5.83334 12.4889 5.49818 12.777 5.00001H13.8333V17.5H2.16667V5.00001H3.22297C3.51115 5.49818 4.04976 5.83334 4.66667 5.83334H11.3333ZM4.66667 13.3333V11.6667H9.66667V13.3333H4.66667ZM4.66667 8.33334V10H11.3333V8.33334H4.66667ZM6.21468 3.33334L6.46387 3.04616C6.73766 2.73063 7.32451 2.50001 8 2.50001C8.67549 2.50001 9.26234 2.73063 9.53613 3.04616L9.78532 3.33334H11.3333V4.16668H4.66667V3.33334H5.83446H6.21468Z" fill="#FF5C00"/>
            </svg>,
            to: '/orders/active'
            
        },
        {
            name: 'Новый заказ',
            svg: 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 19.1667C4.93731 19.1667 0.833252 15.0626 0.833252 10C0.833252 4.9374 4.93731 0.833344 9.99992 0.833344C15.0625 0.833344 19.1666 4.9374 19.1666 10C19.1666 15.0626 15.0625 19.1667 9.99992 19.1667ZM9.99992 17.5C14.1421 17.5 17.4999 14.1421 17.4999 10C17.4999 5.85787 14.1421 2.50001 9.99992 2.50001C5.85778 2.50001 2.49992 5.85787 2.49992 10C2.49992 14.1421 5.85778 17.5 9.99992 17.5ZM14.1666 9.16668H10.8333V5.83334H9.16658V9.16668H5.83325V10.8333H9.16658V14.1667H10.8333V10.8333H14.1666V9.16668Z" fill="#ff5c00"/>
            </svg>,
            to: '/newOrders'

            
        },
        {
            name: 'Чат',
            svg: 
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00008 17.1702L9.07241 14H15.6667C16.5872 14 17.3334 13.2538 17.3334 12.3333V2.33332C17.3334 1.41285 16.5872 0.666656 15.6667 0.666656H2.33341C1.41294 0.666656 0.666748 1.41285 0.666748 2.33332V12.3333C0.666748 13.2538 1.41294 14 2.33341 14H4.00008V17.1702ZM8.59442 12.3333L5.66675 14.1631V12.3333H2.33341V2.33332H15.6667V12.3333H8.59442ZM4.83341 9.83332V8.16666H10.6667V9.83332H4.83341ZM4.83341 4.83332V6.49999H12.3334V4.83332H4.83341Z" fill="#FF5C00"/>
            </svg>,
            to: '/chat'

            
        },
        {
            name: 'Профиль',
            svg: 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 19.1667C4.93731 19.1667 0.833252 15.0626 0.833252 10C0.833252 4.9374 4.93731 0.833344 9.99992 0.833344C15.0625 0.833344 19.1666 4.9374 19.1666 10C19.1666 15.0626 15.0625 19.1667 9.99992 19.1667ZM16.1662 14.2706C17.0071 13.0586 17.4999 11.5869 17.4999 10C17.4999 5.85787 14.1421 2.50001 9.99992 2.50001C5.85778 2.50001 2.49992 5.85787 2.49992 10C2.49992 11.5869 2.99274 13.0586 3.83367 14.2706C4.77155 13.0317 6.97542 12.5 9.99992 12.5C13.0244 12.5 15.2283 13.0317 16.1662 14.2706ZM14.9705 15.6165C14.7266 14.7395 12.9744 14.1667 9.99992 14.1667C7.02544 14.1667 5.27326 14.7395 5.02935 15.6165C6.35267 16.7885 8.0932 17.5 9.99992 17.5C11.9066 17.5 13.6472 16.7885 14.9705 15.6165ZM9.99992 5.00001C7.9825 5.00001 6.66659 6.46314 6.66659 8.33334C6.66659 11.1895 8.13397 12.5 9.99992 12.5C11.8483 12.5 13.3333 11.233 13.3333 8.50001C13.3333 6.60133 12.0117 5.00001 9.99992 5.00001ZM8.33325 8.33334C8.33325 10.2244 9.01509 10.8333 9.99992 10.8333C10.9813 10.8333 11.6666 10.2487 11.6666 8.50001C11.6666 7.45869 11.013 6.66668 9.99992 6.66668C8.9447 6.66668 8.33325 7.34653 8.33325 8.33334Z" fill="#FF5C00"/>
            </svg>,
            to: '/profile'
            
        }
    ];
    const [activeItem, setActiveItem] = useState(0);
    
    const onSelectedItem = index => {
        setActiveItem(index);
    }

    return (
        <div className="navbar">
            {
                pages.map((page, index) => 
                    <Link
                        key={index}
                        to={page.to}
                        className={classnames('navbar__item', {
                            active: activeItem === index && 'actvie'
                        })}
                        onClick={() => onSelectedItem(index)}
                    >
                        {page.svg}
                        {
                            activeItem === index && page.name
                        }
                    </Link>
                )
            }
        </div>
    )
}

export default NavBar
