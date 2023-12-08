import React from 'react';
import styles from './VerifyBusinessesScreenStyles.module.css';
import { Typography } from '../../../components/Typography/Typography';
import { Button } from '../../../components/Button/Button';

type VerifyProps = unknown;

export const VerifyScreen: React.FC<VerifyProps> = () => {
  return (
    <div className={styles.mainContainer}>
      <Typography variant={'headingBold'}>Admin Panel</Typography>
      <div className={styles.businessWrapper}>
        <div className={styles.businessContainer}>
          <div className={styles.businessDataContainer}>
            <Typography variant={'bodyNormal'}>
              Korisnik <b>ime_korisnika</b> je poslao zahtjev za kreiranjem
              biznisa <b>naziv_biznisa</b>
            </Typography>
          </div>
          <div className={styles.buttonsWrapper}>
            <Button
              variant={'transparent'}
              text="PREGLEDAJ"
              onClick={() => {}}
              textVariant={'smallButtonText'}
            />
            <div className={styles.acceptAndDenyContainer}>
              <Button
                variant={'transparent'}
                text="PRIHVATI"
                onClick={() => {}}
                textVariant={'smallButtonText'}
              />
              <div>|</div>
              <Button
                variant={'transparent'}
                text="ODBIJ"
                onClick={() => {}}
                textVariant={'smallButtonText'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
