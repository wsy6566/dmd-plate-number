import * as React from 'react';
interface KeyboardCellProps {
    cell: string;
    cellTextStyle?: React.CSSProperties;
    disabled?: boolean;
    onClick?: (cell: string) => void;
    type: keyboardCellType;
}
declare type keyboardCellType = 'province' | 'normal' | 'character';
declare const KeyboardCell: React.MemoExoticComponent<(props: KeyboardCellProps) => JSX.Element>;
export default KeyboardCell;
