import React from "react";

export interface BaseFieldPropsInterface {
    errors?: string | string[] | Error | Error[];
    warnings?: string | string[];
    tooltip?: BaseFieldToolTipInterface;
    copyTrigger?: CopyTriggerInterface;
    infoIcon?: InfoIconInterface;
    externalInfo?: string | string[];
    label?: LabelInterface;
    children: () => React.ReactNode;
}

export interface BaseFieldToolTipInterface {
    text: string;
    positions: PositionsInterface;
}

export interface PositionsInterface {
    top?: number | string,
    right?: number | string,
    bottom?: number | string,
    left?: number | string,
}

export interface CopyTriggerInterface {
    positions: PositionsInterface;
}

export interface InfoIconInterface {
    text: string;
    positions: PositionsInterface;
    img: string;
}

export interface LabelInterface {
    text: string;
    positions: PositionsInterface;
}

interface InputFieldPropsInterface {
    type: string;
}

export interface InputInterface {
    inputValue: string;
    errors: string | string[];
    label: LabelInterface;
    fieldProps: InputFieldPropsInterface;
}

export enum BaseFieldStatesEnum {
    IS_VALID = 'isVaLid',
}
