export declare const buildStyle: (style: CSSProperties, flex: Flex) => CSSProperties;
export declare type Flex = {
    display?: 'flex' | 'inline-flex';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    flexDirection?: 'column' | 'row';
    flexWrap?: 'nowrap' | 'wrap';
};
export declare type CSSProperties = {
    [key: string]: string | number;
};
