import React from 'react';
import { styles } from './ExploreScreen.styles';
import { Typography } from '../../components/Typography/Typography';
import { useForm } from 'react-hook-form';
import { ControlledInput } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { ControlledSelect } from '../../components/Select/Select';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import blankImage from '../../images/blankImage.png';
import { companies } from '../../dummyData/DummyData';
import { useNavigate } from 'react-router-dom';
import { ScreenWrapper } from '../../components/ScreenWrapper/ScreenWrapper';

type ExploreScreenProps = unknown;

export const ExploreScreen: React.FC<ExploreScreenProps> = () => {
  const { control, handleSubmit } = useForm<any>({
    // resolver: yupResolver(validationSchema)
  });

  const navigate = useNavigate();

  return (
    <ScreenWrapper>
      <div
        style={{
          width: '100%',
          background: 'white',
          height: '100%',
          padding: '0px 180px',
          boxSizing: 'border-box'
        }}
      >
        <div
          style={{
            padding: '64px 275px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', width: '30%' }}>
            <Typography variant={'headingBold'}>Pretraga</Typography>
          </div>
          <div
            style={{
              width: '70%',
              display: 'flex',
              flexDirection: 'row',
              gap: '12px',
              justifyContent: 'flex-end'
            }}
          >
            <div style={{ width: '100%' }}>
              <ControlledInput
                label="Ukucaj pojam, kategoriju, servis ili naziv..."
                control={control}
                name="search"
                inputType={'search'}
              />
            </div>
            <Button
              text="Pretraži"
              onClick={() => {}}
              variant={'outlined'}
              textVariant={'smallButtonText'}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            height: '70%',
            gap: '88px'
          }}
        >
          <div style={{ width: '187px' }}>
            <div style={{ marginBottom: '31px' }}>
              <Typography variant={'subHeadingBold'}>Filteri</Typography>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexDirection: 'column'
              }}
            >
              <ControlledSelect
                control={control}
                name="kategorije"
                label="Kategorije"
                options={[
                  { label: 'Ten', value: 10 },
                  { label: 'Twenty', value: 20 },
                  { label: 'Thirty', value: 30 }
                ]}
              />
              <ControlledSelect
                control={control}
                name="usluga"
                label="Usluga"
                options={[
                  { label: 'Ten', value: 10 },
                  { label: 'Twenty', value: 20 },
                  { label: 'Thirty', value: 30 }
                ]}
              />
              <ControlledSelect
                control={control}
                name="tag"
                label="Tag"
                options={[
                  { label: 'Ten', value: 10 },
                  { label: 'Twenty', value: 20 },
                  { label: 'Thirty', value: 30 }
                ]}
              />
              <ControlledSelect
                control={control}
                name="grad"
                label="Grad"
                options={[
                  { label: 'Ten', value: 10 },
                  { label: 'Twenty', value: 20 },
                  { label: 'Thirty', value: 30 }
                ]}
              />
              <ControlledSelect
                control={control}
                name="program"
                label="Program"
                options={[
                  { label: 'Ten', value: 10 },
                  { label: 'Twenty', value: 20 },
                  { label: 'Thirty', value: 30 }
                ]}
              />
            </div>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '23px',
              overflow: 'scroll'
            }}
          >
            {companies.map((company) => (
              <div style={{ width: '305px', height: '305px' }}>
                <ImageCard
                  image={blankImage}
                  headerText={company.header}
                  subtitleText={company.subtitle}
                  onClick={() => navigate('/biznis')}
                  type={'headerAndSubtitle'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
};
