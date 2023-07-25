/* eslint-disable @next/next/no-img-element */
import React from 'react';

import * as Styles from './styles';

import BannerImage from '../../assets/banner.png';

export const Banner: React.FC = () => {
  return (
    <Styles.Container>

      <Styles.Banner>
        <img
          src='https://res.cloudinary.com/zasetrewsqw/image/upload/v1687037191/pegi_eighteen/image_2_ztsd8e.png'
          alt=''
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </Styles.Banner>

    </Styles.Container>
  );
};
