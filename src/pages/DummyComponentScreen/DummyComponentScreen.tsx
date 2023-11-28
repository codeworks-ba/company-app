import React, { useEffect, useState } from 'react';
import { ControlledInput } from '../../components/Input/Input';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
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
import { RadioButton } from '../../components/RadioButton/RadioButton';

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
  const { control, handleSubmit } = useForm<LoginUserDto>({
    resolver: yupResolver(validationSchema)
  });

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onSubmit = (data: LoginUserDto) => {
    console.log('DATA: ', data.test3.toISOString());
  };

  useEffect(() => {
    console.log('IS CHECKED: ', isChecked);
  }, [isChecked]);

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
      <div style={{ width: '100%' }}>
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
        <Typography>OxygenLight</Typography>
        <Typography>OxygenLight</Typography>
        <Typography>OxygenLight</Typography>
        <Typography>OxygenLight</Typography>
        <Typography>OxygenLight</Typography>
        <Typography>OxygenLight</Typography>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
        }}
      >
        <Typography>OxygenRegular</Typography>
        <Typography>OxygenRegular</Typography>
        <Typography>OxygenRegular</Typography>
        <Typography>OxygenRegular</Typography>
        <Typography>OxygenRegular</Typography>
        <Typography>OxygenRegular</Typography>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
        }}
      >
        <Typography>OxygenBold</Typography>
        <Typography>OxygenBold</Typography>
        <Typography>OxygenBold</Typography>
        <Typography>OxygenBold</Typography>
        <Typography>OxygenBold</Typography>
        <Typography>OxygenBold</Typography>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
        }}
      >
        <Typography>InterRegular</Typography>
        <Typography>InterRegular</Typography>
        <Typography>InterRegular</Typography>
        <Typography>InterRegular</Typography>
        <Typography>InterRegular</Typography>
        <Typography>InterRegular</Typography>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
        }}
      >
        <Typography>InterBold</Typography>
        <Typography>InterBold</Typography>
        <Typography>InterBold</Typography>
        <Typography>InterBold</Typography>
        <Typography>InterBold</Typography>
        <Typography>InterBold</Typography>
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
      <div style={{ width: '100px', height: '100px' }}>
        <RadioButton onChange={(value) => setIsChecked(value)} />
      </div>
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
