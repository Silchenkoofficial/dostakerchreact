import React from 'react';

import {SendOrderButton} from '../../components';

function Completed({openModal}) {
    return (
        <React.Fragment>
            <div className="orders__active">
                <h1>У вас пока нет завершенных заказов</h1>
                <SendOrderButton
                    title="Отправить посылку"
                    description="Курьер отвезет документы, подарок и все, что пожелаете."
                    openModal={openModal}
                />
            </div>
        </React.Fragment>
    )
}

export default Completed;
