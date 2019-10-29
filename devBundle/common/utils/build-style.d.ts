export declare const buildStyle: (style: CSSProperties, flex: Flex) => CSSProperties;
export interface Flex {
    display?: 'flex' | 'inline-flex';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    flexDirection?: 'column' | 'row';
    flexWrap?: 'nowrap' | 'wrap';
    flex?: string;
}
export declare type CSSProperties = {
    [key: string]: string | number;
};
