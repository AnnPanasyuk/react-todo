import React from 'react';
import { BaseFieldPropsInterface } from './interfaces';

export const BaseField: React.FC<BaseFieldPropsInterface> = (props: BaseFieldPropsInterface) => {
    const { errors, label, warnings, tooltip, copyTrigger, infoIcon, externalInfo } = props;

    const fieldErrorsWarnings = (errors: string | string[] | Error | Error[]): string => {
        let errorMessage: string = typeof errors == 'string' ? errors : '';
        let middleVar: string | string[] | Error | Error[] = errors;

        if (Array.isArray(middleVar)) {
            middleVar = middleVar[0];
        }
        if (middleVar instanceof Error) {
            errorMessage = middleVar.message;
        }

        return errorMessage;
    }

    return (
        <div style={{position: 'relative', padding: '30px 0 0 0'}}>
            <label style={{position: 'absolute', ...label?.positions}}>
                { label?.text }
            </label>
            { props.children() }

            {
                errors && <p>{ fieldErrorsWarnings(errors) }</p>
            }

            {
                warnings && <p>{ fieldErrorsWarnings(warnings) }</p>
            }

            {
                externalInfo && <p>{ Array.isArray(externalInfo) ? externalInfo.join(' ') : externalInfo }</p>
            }

            {
                copyTrigger && <div style={{position: 'absolute', ...copyTrigger?.positions}} />
            }

            {
                tooltip &&
                <span style={{position: 'absolute', ...tooltip?.positions}}>
                    { tooltip.text }
                </span>
            }

            {
                infoIcon &&
                <img style={{position: 'absolute', ...infoIcon?.positions}} src={infoIcon.img} alt={infoIcon?.text} />
            }
        </div>
    )
}
