import React from 'react';
import { ControlledInput } from '../../components/Input/Input';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { LoginUserDto } from '../../services/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Button/Button';
import { Typography } from '../../components/Typography/Typography';
import blankImage from '../../images/blankImage.png';
import templateImage from '../../images/templateImage.png';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { ControlledSelect } from '../../components/Select/Select';
import { ControlledMultilineInput } from '../../components/Input/Multiline/MultilineInput';
import { ImageWithText } from '../../components/ImageWithText/ImageWithText';
import { Link } from '../../components/Link/Link';
import { Tag } from '../../components/Tag/Tag';
import { ControlledDatePicker } from '../../components/DatePicker/DatePicker';

type LoginScreenProps = unknown;
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Use correct email format!')
    .required('This field is required!'),
  test: yup.string().required('This field is required!'),
  test2: yup.string().required('This field is required!'),
  test3: yup.date().required('This field is required!')
});

export const DummyComponentScreen: React.FC<LoginScreenProps> = () => {
  const { control, handleSubmit, setFocus, register, formState } =
    useForm<LoginUserDto>({
      resolver: yupResolver(validationSchema)
    });

  const onSubmit = (data: LoginUserDto) => {
    console.log('DATA: ', data.test3.toISOString());
  };

  return (
    <div style={{ padding: 12 }}>
      <h1>COMPONENT SCREEN</h1>
      <br />
      <div
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'row',
          gap: 30
        }}
      >
        <div style={{ flex: 1 }}>
          <ControlledInput
            control={control}
            name={'email'}
            inputType={'input'}
          />
        </div>
        <div style={{ flex: 1 }}>
          <ControlledDatePicker
            control={control}
            name={'test3'}
            label={'Date test'}
          />
        </div>
        <div style={{ flex: 1 }}>
          <ControlledSelect
            control={control}
            name="test"
            label="Test"
            options={[
              { label: 'Ten', value: 10 },
              { label: 'Twenty', value: 20 },
              { label: 'Thirty', value: 30 }
            ]}
          />
        </div>
        <div style={{ flex: 1 }}>
          <ControlledMultilineInput
            control={control}
            name="test2"
            label="Message"
            rows={6}
            characterLimit={200}
          />
        </div>
      </div>
      <br />
      <div style={{ width: '20%' }}>
        <ControlledInput
          control={control}
          name={'test3'}
          inputType={'search'}
        />
      </div>

      <br />
      <div style={{ display: 'flex', flexDirection: 'row', width: '30%' }}>
        <div style={{ flex: 1 }}>
          <Button
            text={'Test'}
            variant={'filled'}
            onClick={() => alert('IT WORKS!')}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Button
            text={'Test'}
            variant={'filled'}
            onClick={() => alert('IT WORKS!')}
            color={'red'}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Button
            text={'Test'}
            variant={'outlined'}
            onClick={() => alert('IT WORKS!')}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Button
            text={'Test'}
            variant={'transparent'}
            onClick={() => alert('IT WORKS!')}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Tag text="Tag" />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
        }}
      >
        <Typography text="OxygenLight" size={'xs'} font={'OxygenLight'} />
        <Typography text="OxygenLight" size={'s'} font={'OxygenLight'} />
        <Typography text="OxygenLight" size={'m'} font={'OxygenLight'} />
        <Typography text="OxygenLight" size={'l'} font={'OxygenLight'} />
        <Typography text="OxygenLight" size={'xl'} font={'OxygenLight'} />
        <Typography text="OxygenLight" size={'xxl'} font={'OxygenLight'} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
        }}
      >
        <Typography text="OxygenRegular" size={'xs'} font={'OxygenRegular'} />
        <Typography text="OxygenRegular" size={'s'} font={'OxygenRegular'} />
        <Typography text="OxygenRegular" size={'m'} font={'OxygenRegular'} />
        <Typography text="OxygenRegular" size={'l'} font={'OxygenRegular'} />
        <Typography text="OxygenRegular" size={'xl'} font={'OxygenRegular'} />
        <Typography text="OxygenRegular" size={'xxl'} font={'OxygenRegular'} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
        }}
      >
        <Typography text="OxygenBold" size={'xs'} font={'OxygenBold'} />
        <Typography text="OxygenBold" size={'s'} font={'OxygenBold'} />
        <Typography text="OxygenBold" size={'m'} font={'OxygenBold'} />
        <Typography text="OxygenBold" size={'l'} font={'OxygenBold'} />
        <Typography text="OxygenBold" size={'xl'} font={'OxygenBold'} />
        <Typography text="OxygenBold" size={'xxl'} font={'OxygenBold'} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
        }}
      >
        <Typography text="InterRegular" size={'xs'} font={'InterRegular'} />
        <Typography text="InterRegular" size={'s'} font={'InterRegular'} />
        <Typography text="InterRegular" size={'m'} font={'InterRegular'} />
        <Typography text="InterRegular" size={'l'} font={'InterRegular'} />
        <Typography text="InterRegular" size={'xl'} font={'InterRegular'} />
        <Typography text="InterRegular" size={'xxl'} font={'InterRegular'} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
        }}
      >
        <Typography text="InterBold" size={'xs'} font={'InterBold'} />
        <Typography text="InterBold" size={'s'} font={'InterBold'} />
        <Typography text="InterBold" size={'m'} font={'InterBold'} />
        <Typography text="InterBold" size={'l'} font={'InterBold'} />
        <Typography text="InterBold" size={'xl'} font={'InterBold'} />
        <Typography text="InterBold" size={'xxl'} font={'InterBold'} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <div style={{ width: '304px', height: '304 px' }}>
          <ImageCard
            image={blankImage}
            type={'headerAndSubtitle'}
            headerText={'Test'}
            subtitleText={'This is a test'}
            onClick={() => console.log('Al me kardira')}
          />
        </div>
        <div style={{ width: '304px', height: '304 px' }}>
          <ImageCard
            image={blankImage}
            type={'header'}
            headerText={'Test'}
            onClick={() => console.log('Al me kardira')}
          />
        </div>
        <div style={{ width: '304px', height: '304 px' }}>
          <ImageCard
            type={'header'}
            headerText={'Add new service'}
            onClick={() => console.log('Al me kardira')}
          />
        </div>
      </div>
      <br />
      <div
        style={{
          width: 300,
          height: 300
        }}
      >
        <ImageWithText
          image={templateImage}
          header="Test"
          subtitle="Test subtitle"
        />
      </div>
      <br />
      <Link text={'Go to google'} link={'https://www.google.com/'} />
      <br />
      <div style={{ width: '20%' }}>
        <Button
          text="test"
          onClick={handleSubmit(onSubmit)}
          variant={'filled'}
        />
      </div>
    </div>
  );
};
