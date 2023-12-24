import React, { useEffect, useRef, useState } from 'react';
import { Resolver, useFieldArray, useForm } from 'react-hook-form';
import { ControlledEditableImageCard } from '../../components/ImageCard/EditableImageCard/EditableImageCard';
import { Button } from '../../components/Button/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Service } from '../../services/types';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { ControlledAutocomplete } from '../../components/Autocomplete/Autocomplete';

type TestingScreenProps = unknown;

const validationSchema = yup.object().shape({
  services: yup
    .array()
    .of(
      yup.object().shape({
        service: yup.string().required('Molimo unesite naziv usluge!'),
        image: yup.string().optional()
      })
    )
    .required()
});

export const TestingScreen: React.FC<TestingScreenProps> = () => {
  const { control, handleSubmit } = useForm<any>({
    // resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div style={{ padding: '36px 180px 36px 180px' }}>
      <div style={{ width: '300px' }}>
        <ControlledAutocomplete
          control={control}
          name="autocomplete"
          label="Test"
          options={[
            { label: 'Ten', value: 'ten' },
            { label: 'Twenty', value: 'twenty' },
            { label: 'Thirty', value: 'thirty' }
          ]}
        />
      </div>
      <br />
      <Button
        text="Dodirni me"
        onClick={handleSubmit(onSubmit)}
        variant="filled"
      />
    </div>
  );
};
