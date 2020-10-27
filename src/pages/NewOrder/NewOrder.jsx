import React, {useRef, useState} from 'react';
import './NewOrder.css';


import { TypesOfDelivery, Weights, Product, NewOrderNav, InputInfo, InputBlock} from './NewOrderComponents';

function NewOrder({closeModal}) {
    const inputFields = [
        <InputInfo title="Откуда" />,
        <InputInfo title="Куда" />
    ];

    const newOrderForm = useRef(0);
    const [items, setItems] = useState(inputFields);
    const addNewAddress = () => {
        setItems([
            ...items,
            <InputInfo title="Куда" />
        ]);
    }

    return (
        <React.Fragment>
            <div className="new-order">
                <header>
                    <div className="clear">Очистить</div>
                    <h1>Новый заказ</h1>
                    <div
                        className="close-modal"
                        onClick={closeModal}
                    >
                        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.14351 5.82176L12.4468 0.518462L13.6253 1.69697L8.32202 7.00027L13.6253 12.3036L12.4468 13.4821L7.14351 8.17879L1.84021 13.4821L0.6617 12.3036L5.965 7.00027L0.6617 1.69697L1.84021 0.518462L7.14351 5.82176Z" fill="black" />
                        </svg>
                    </div>
                </header>
                <TypesOfDelivery />
                <Weights />
                <form className="form" ref={newOrderForm}>
                    <Product />
                    {
                        items.map((item, index) => {
                            return item;
                        })
                    }
                </form>
                <div className="addInputInfo" onClick={() => addNewAddress()}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.0014 19.1669C4.93877 19.1669 0.834717 15.0628 0.834717 10.0002C0.834717 4.93761 4.93877 0.833557 10.0014 0.833557C15.064 0.833557 19.168 4.93761 19.168 10.0002C19.168 15.0628 15.064 19.1669 10.0014 19.1669ZM10.0014 17.5002C14.1435 17.5002 17.5014 14.1424 17.5014 10.0002C17.5014 5.85809 14.1435 2.50022 10.0014 2.50022C5.85925 2.50022 2.50138 5.85809 2.50138 10.0002C2.50138 14.1424 5.85925 17.5002 10.0014 17.5002ZM14.168 9.16689H10.8347V5.83356H9.16805V9.16689H5.83472V10.8336H9.16805V14.1669H10.8347V10.8336H14.168V9.16689Z" fill="#FF5C00" />
                    </svg>
                    Добавить адрес
                </div>
                <NewOrderNav />
            </div>
        </React.Fragment>
    )
}

export default NewOrder;
