import React from 'react';
import { styles } from './BusinessScreen.styles';
import blankImage from '../../images/blankImage.png';
import whiteImage from '../../images/whiteImage.png';
import { Typography } from '../../components/Typography/Typography';
import { Tag } from '../../components/Tag/Tag';

type BusinessScreenProps = unknown;

export const BusinessScreen: React.FC<BusinessScreenProps> = () => {
  return (
    <div style={styles.flexColumn}>
      <div style={{ width: '100%', height: '365px' }}>
        <img
          src={blankImage}
          alt="failedToRender"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={styles.mainContainer}>
        <div style={styles.flexRow}>
          <div
            style={{
              width: '350px',
              height: '350px',
              transform: 'translateY(-50%)'
            }}
          >
            <img
              src={whiteImage}
              alt="failedToRender"
              style={{
                borderRadius: 200,
                border: '1px solid #707070',
                width: '100%',
                height: '100%'
              }}
            />
          </div>
          <div style={{ marginLeft: '60px', marginTop: '44px', width: '64%' }}>
            <div style={styles.flexRow}>
              <div style={{ flex: 1 }}>
                <div style={styles.flexColumn}>
                  <Typography variant={'headingBold'}>Naziv biznisa</Typography>
                  <Typography variant={'subHeadingBold'}>Kategorija</Typography>
                  <div
                    style={{
                      marginTop: '16px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: 'row',
                      gap: '7px'
                    }}
                  >
                    <div style={{ width: '65px', height: '36px' }}>
                      <Tag text="TAG" />
                    </div>
                    <div style={{ width: '65px', height: '36px' }}>
                      <Tag text="TAG" />
                    </div>
                    <div style={{ width: '65px', height: '36px' }}>
                      <Tag text="TAG" />
                    </div>
                    <div style={{ width: '65px', height: '36px' }}>
                      <Tag text="TAG" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '15px',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ width: '70px', height: '70px' }}>
                  <img
                    src={whiteImage}
                    alt="failedToRender"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 200,
                      border: '1px solid #707070'
                    }}
                  />
                </div>
                <div style={{ width: '70px', height: '70px' }}>
                  <img
                    src={whiteImage}
                    alt="failedToRender"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 200,
                      border: '1px solid #707070'
                    }}
                  />
                </div>
                <div style={{ width: '70px', height: '70px' }}>
                  <img
                    src={whiteImage}
                    alt="failedToRender"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 200,
                      border: '1px solid #707070'
                    }}
                  />
                </div>
                <div style={{ width: '70px', height: '70px' }}>
                  <img
                    src={whiteImage}
                    alt="failedToRender"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 200,
                      border: '1px solid #707070'
                    }}
                  />
                </div>
                <div style={{ width: '70px', height: '70px' }}>
                  <img
                    src={whiteImage}
                    alt="failedToRender"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 200,
                      border: '1px solid #707070'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>aaaa</div>
      </div>
    </div>
  );
};
