import React, {useState} from 'react';

function InputBlock({ svg, labelText, product, value, placeholder, isDisabled, isTime, style}) {
    const [inputValue, setInputValue] = useState(value);
    console.log(isTime);
    return (
        <label className="label">
            <div className="que" style={style}>
                {svg}
                {labelText}
            </div>
            <input
                className="input-block"
                value={product}
                placeholder={placeholder}
                disabled={isDisabled}
                onInput={(e) => setInputValue(e.target.value)} />
        </label>
    )
}

export default InputBlock;
