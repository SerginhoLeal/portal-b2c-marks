/* eslint-disable @next/next/no-img-element */
import * as Styles from './styles';

import BannerImage from '../../assets/banner.png';

export const Banner: React.FC = () => {
  return (
    <Styles.Container>

      <Styles.Banner>
        <img
          src='https://res.cloudinary.com/zasetrewsqw/image/upload/v1695858112/marks-joias/Bunner_jwtbl8.png'
          alt=''
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'bottom',
          }}
        />
      </Styles.Banner>

    </Styles.Container>
  );
};
