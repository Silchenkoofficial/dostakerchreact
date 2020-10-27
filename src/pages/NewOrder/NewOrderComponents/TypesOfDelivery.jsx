import React, {useState} from 'react';
import classnames from 'classnames';

function TypesOfDelivery() {
    const types = ["Пешком", "На машине", "Грузовой"];
    const [activeType, SetActiveType] = useState(0);

    return (
        <div className="types">
            <ul className="types__list">
                {
                    types.map((type, index) => 
                        <li
                            key={index}
                            onClick={() => SetActiveType(index)}
                            className={classnames('types__list--link', {
                                active: activeType === index && 'active'
                            })}
                        >{type}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default TypesOfDelivery;
