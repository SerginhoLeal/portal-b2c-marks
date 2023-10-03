import styled, { css } from "styled-components";
import { colors, fontWeight } from '../../styles/theme';

import { fix_color, fix_size, fix_weight, font_style } from "./prefix";

interface Typography {
  loading?: {
    isLoading: boolean;
    width: number | string;
    height: number | string;
  };
  fontSize?: keyof typeof fix_size;
  fontWeight?: keyof typeof fontWeight;
  color?: keyof typeof colors;
  fontStyle?: keyof typeof font_style;
};

export const Text = styled.p<Typography>`
  ${({ theme, loading = { isLoading: false }, fontSize = 'medium', fontWeight = 'medium', color = 'text', fontStyle = 'normal' }) =>
  loading.isLoading ? css`
    width: ${loading.width}px;
    height: ${loading.height}px;

    /* margin: 5px 0; */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 2px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;

    @keyframes shine {
      to {
        background-position-x: -200%;
      }
    }
  ` : css`
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