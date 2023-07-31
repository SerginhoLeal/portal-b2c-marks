import styled, { css } from "styled-components";
import { colors, fontWeight } from '../../styles/theme';

import { fix_color, fix_size, fix_weight, font_style } from "./prefix";

interface Typography {
  fontSize?: keyof typeof fix_size;
  fontWeight?: keyof typeof fontWeight;
  color?: keyof typeof colors;
  fontStyle?: keyof typeof font_style;
};

export const Text = styled.p<Typography>`
  ${({ theme, fontSize = 'medium', fontWeight = 'medium', color = 'text', fontStyle = 'normal' }) => css`
    color: ${theme.colors[color]};

    font-size: ${fix_size[fontSize]};
    font-weight: ${theme.fontWeight[fontWeight]};

    font-style: ${theme.fontStyle[fontStyle]};
  `};
`;

// passar o mouse por cima e o texto aparece
export const TextDescription = styled.p<Typography>`
  ${({ theme, fontSize = 'medium', fontWeight = 'medium', color = 'text', fontStyle = 'normal' }) => css`
    color: ${theme.colors[color]};
    font-size: ${fix_size[fontSize]};
    font-weight: ${theme.fontWeight[fontWeight]};
    font-style: ${font_style[fontStyle]};

    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */

    /* text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 3em; */

    /* line-height: 1.8em; */
  `};
`;

export const Title = styled.h1<Typography>`
  ${({ theme, fontSize = 'title', fontWeight = 'medium', color = 'text', fontStyle = 'normal' }) => css`
    color: ${theme.colors[color]};
    font-size: ${fix_size[fontSize]};
    font-style: ${font_style[fontStyle]};
    font-weight: ${theme.fontWeight[fontWeight]};
  `};
`;

export const Strong = styled.strong<Typography>`
  ${({ theme, fontSize = 'medium', fontWeight = 'medium', color = 'text', fontStyle = 'normal' }) => css`
    color: ${theme.colors[color]};

    font-size: ${fix_size[fontSize]};
    font-weight: ${theme.fontWeight[fontWeight]};

    font-style: ${theme.fontStyle[fontStyle]};
  `};
`;