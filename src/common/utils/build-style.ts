import { prefix } from 'inline-style-prefixer';

export const buildStyle = (style: CSSProperties, flex: Flex): CSSProperties => {
  return flex
    ? {
      display: 'flex',
      ...prefix({ ...flex, ...style }),
      ...flex,
      ...style,
    }
    : {
      ...prefix(style),
      ...style,
    };
};

export interface Flex {
  display?: 'flex' | 'inline-flex';
  justifyContent?: 'center' |
    'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  flexDirection?: 'column' | 'row';
  flexWrap?: 'nowrap' | 'wrap';
  flex?: string;
}

export type CSSProperties = {
  [key: string]: string | number;
};