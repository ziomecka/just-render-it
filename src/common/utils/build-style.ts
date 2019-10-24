export const buildStyle = (style: CSSProperties, flex: Flex): CSSProperties => {
  return flex
    ? { ...style, display: 'flex', ...flex }
    : style;
  };

export type Flex = {
  display?: 'flex' | 'inline-flex';
  justifyContent?: 'center' |
    'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  flexDirection?: 'column' | 'row';
  flexWrap?: 'nowrap' | 'wrap';
}

export type CSSProperties = {
  [key: string]: string | number;
};