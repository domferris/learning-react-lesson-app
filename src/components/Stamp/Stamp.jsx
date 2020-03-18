import React from 'react';
import styled from 'styled-components'

export const StyledStamp = styled.span`
    background: aquamarine;

    & > span {
        font-size: 2rem;
    }
`

export const Stamp = (props) => {
    if (props.isHidden) return null

    return (
    <StyledStamp>{props.data ? props.data.name : props.children}</StyledStamp>
    )
}