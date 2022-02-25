import React, { Children, FunctionComponent } from 'react'

import styled, { css } from 'styled-components'

interface TextProps {
    color?: 'red' | 'dark'
}

const colorToCss = (color:TextProps['color']) => {
    switch(color) {
        case 'red':
            return css`
                background-color: #c04444;
                color: #fff;
                &:hover,
                &:focus {
                background-color: #af3b3b;
                }
            `
        case 'dark':
            return css`
                background-color: #272727;
                color: #c5830d;
                &:hover,
                &:focus {
                background-color: #1a1a1a;
                }
            `
    }

    return css`
        background-color: #2e2e2e;
        color: #fff;
        &:hover,
        &:focus {
        background-color: #212121;
        }
    `     
}

export const StyledTextContainer = styled.div<TextProps>`
    font-family: inherit;
    font-size: inherit;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    margin-top:1em;
    padding: 1em;
    ${({color}) => colorToCss(color)}
    position: relative;
    overflow: hidden;

`

export const ITextContainer:FunctionComponent<TextProps> = ({children,color}) => {
    return (
        <StyledTextContainer color={color} >
            {children}
        </StyledTextContainer>
    )
}

export default ITextContainer;