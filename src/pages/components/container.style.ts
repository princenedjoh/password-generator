import styled from "styled-components";

export const Container = styled.div.attrs({
   className : ` Container `
})<{
    width? : string,
    bg? : string,
    padding? : string
}>`
    width : ${({width}) => width ?? '100%'};
    height : ${() => 'fit-content'};
    background : ${({theme, bg}) => bg ?? theme.colors.darkGray};
    padding : ${({padding}) => padding ?? '15px'};
`