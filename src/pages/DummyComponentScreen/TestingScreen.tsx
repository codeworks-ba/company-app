import React, { useEffect, useRef, useState } from 'react';
import { Resolver, useFieldArray, useForm } from 'react-hook-form';
import { ControlledEditableImageCard } from '../../components/ImageCard/EditableImageCard/EditableImageCard';
import { Button } from '../../components/Button/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Service } from '../../services/types';
import { ImageCard } from '../../components/ImageCard/ImageCard';

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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { control, handleSubmit, setValue, setError } = useForm<Service>({
    resolver: yupResolver(validationSchema)
  });

  const { append, fields } = useFieldArray({
    control,
    name: 'services'
  });

  const onSubmit = (data: Service) => {
    let isOkay = true;
    data.services.forEach((service, index) => {
      if (!service.image) {
        setError(`services.${index}.service`, {
          message: 'Molimo dodajte sliku usluge!'
        });
        isOkay = false;
      }
    });
    if (isOkay) {
      console.log('DATA: ', data);
    }
  };

  const [imagesArray, setImagesArray] = useState<
    { index: number; image: string }[]
  >([]);

  const fileInputRef = useRef(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    console.log('WHAT IS THE INDEX: ', currentIndex);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagesArray((oldVal) => [
          ...oldVal,
          { index: currentIndex, image: e.target!!.result as string }
        ]);
        setValue(`services.${currentIndex}.image`, e.target!!.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = (index: number) => {
    setCurrentIndex(index);
    //@ts-ignore
    fileInputRef.current!!.click();
  };

  return (
    <div style={{ padding: '36px 180px 36px 180px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
        {fields.map((field, index) => (
          <div style={{ width: '250px', height: '250px' }} key={field.id}>
            <ControlledEditableImageCard
              control={control}
              name={`services.${index}`}
              label="Unesite text"
            />
          </div>
        ))}
        <div style={{ width: '250px', height: '250px' }}>
          <ImageCard
            type="header"
            headerText="Dodaj novi"
            onClick={() => {
              append({
                service: '',
                image: ''
              });
            }}
          />
        </div>
      </div>
      <Button text="click" onClick={handleSubmit(onSubmit)} variant="filled" />
    </div>
  );
};
