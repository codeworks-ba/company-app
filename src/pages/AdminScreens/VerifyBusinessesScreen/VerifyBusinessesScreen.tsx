import React, { useContext, useEffect, useState } from 'react';
import styles from './VerifyBusinessesScreenStyles.module.css';
import { Typography } from '../../../components/Typography/Typography';
import { Button } from '../../../components/Button/Button';
import axios from 'axios';
import { AuthUser, CompanyDto } from '../../../services/types';
import { AuthContext } from '../../../providers/auth/authContext';
import { TOKEN } from '../../../services/token';
import { useNavigate } from 'react-router-dom';
import { config } from '../../../config/config';

type VerifyProps = unknown;

export const VerifyScreen: React.FC<VerifyProps> = () => {
  const { user, getMe } = useContext(AuthContext);

  const [unverifiedCompanies, setUnverifiedCompanies] = useState<CompanyDto[]>(
    []
  );

  const navigate = useNavigate();

  const updateCompanyStatus = (companyId: string, status: string) => {
    const data = {
      status: status
    };
    axios
      .put(`${config.API_URL}companies/update/${companyId}`, data)
      .then(function (response) {
        if (response.data) {
          getUnverifiedBusinesses();
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  const getUnverifiedBusinesses = () => {
    axios
      .get(`${config.API_URL}companies/get-unverified`, {
        params: { status: 'pending' },
        headers: { Authorization: `Bearer ${TOKEN.get()}` }
      })
      .then(function (response) {
        if (response.data) {
          setUnverifiedCompanies(response.data as CompanyDto[]);
        } else {
          console.log('NOT GOOD');
        }
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
  };

  useEffect(() => {
    if (user) {
      getUnverifiedBusinesses();
    }
  }, [user]);

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Typography variant={'headingBold'}>Admin Panel</Typography>
      <div className={styles.businessWrapper}>
        {unverifiedCompanies.map((company) => (
          <div className={styles.businessContainer}>
            <div className={styles.businessDataContainer}>
              <Typography variant={'bodyNormal'}>
                Korisnik{' '}
                <b>{`${(company.userId as unknown as AuthUser).firstName} ${
                  (company.userId as unknown as AuthUser).lastName
                }`}</b>{' '}
                je poslao zahtjev za kreiranjem biznisa <b>{company.name}</b>
              </Typography>
            </div>
            <div className={styles.buttonsWrapper}>
              <Button
                variant={'transparent'}
                text="PREGLEDAJ"
                onClick={() => navigate(`/biznis/${company._id}`)}
                textVariant={'smallButtonText'}
              />
              <div className={styles.acceptAndDenyContainer}>
                <Button
                  variant={'transparent'}
                  text="PRIHVATI"
                  onClick={() => updateCompanyStatus(company._id, 'approved')}
                  textVariant={'smallButtonText'}
                />
                <div>|</div>
                <Button
                  variant={'transparent'}
                  text="ODBIJ"
                  onClick={() =>
                    updateCompanyStatus(company._id, 'not_approved')
                  }
                  textVariant={'smallButtonText'}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
