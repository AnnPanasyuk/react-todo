import React from 'react';
import { BaseField } from './BaseField';
import { InputInterface } from './interfaces';


export const InputField: React.FC<InputInterface> = (props, fieldProps) => {
    const { inputValue, errors, label } = props;

    return (
        <BaseField {...{ errors, label }}>
            {
                () => <input value={inputValue} {...fieldProps} />
            }
        </BaseField>
    );
}
