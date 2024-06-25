import "styled-components";

export enum TypographySize {
  body = "10px",
  HL = "12px",
  HM = "14px",
}

export interface AppTypographyProps {
  bold?: TypographyBold;
  size?: TypographySize;
  textColor?: string;
  colorTheme? : string;
  wrap?: string;
  underline?: boolean
  clickable?: boolean
  clickableLink?: boolean
  italic?: boolean
  textAlign? : string
  display? : string
  ellipsis? : boolean
  maxLines? : number
  lineHeight? : number
}

export interface buttonProps {
  width : string,
  backgroundColor : string,
}

export enum TypographyBold {
  sm = "400",
  md = "500",
  lg = "800",
}

export interface flexProps {
  direction ? : 'column' | 'row',
  gap ? : number,
  padding ? : string,
  margin ? : string,
  justify ? : string,
  align ? : string,
  width ? : string,
  height ? : string
  maxWidth ? : string
  maxHeight ? : string
  textColor?: string;
  colorTheme? : string;
  flexWrap? : boolean
  opacity? : number
  rounded? : string
  background? : string
  cursor? : string
  shadow? : string
  z? : number
  position? : 'relative' | 'absolute' | 'fixed' | string
}

export interface hrProps {
  size? : {
    width? : string,
    height? : string,
  },
  background? : string,
  margin? : string,
  padding? : string
}

export interface clickableProps {
  cursor? : string
  radius? : string
  padding? : string
  margin? : string
}