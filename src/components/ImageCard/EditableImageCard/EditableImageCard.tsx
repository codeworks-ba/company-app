import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { styles } from './EditableImageCard.styles';
import PlusCircle from '../../../images/plusCircle.svg';
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps
} from 'react-hook-form';
import styled from './EditableImageCardStyles.module.css';
import axios from 'axios';

type ControlledEditableImageCardProps<T extends FieldValues> =
  UseControllerProps<T> & ImageCardProps;

type CardValueType = { name: string | undefined; imageUrl: string | null };

type ImageCardProps = {
  image?: string;
  label: string;
  defaultValue?: string;
  errorText?: FieldError;
  onChange?: (data: CardValueType) => void;
};

const EditableImageCard: React.FC<ImageCardProps> = ({
  image = null,
  label,
  defaultValue,
  errorText,
  onChange,
  ...rest
}) => {
  const [uploadedImage, setUploadedImage] = useState(image);
  const [value, setValue] = useState(defaultValue);
  const [imageFile, setImageFile] = useState<File>();
  const [imageFromApi, setImageFromApi] = useState<string>();
  const error = errorText ? errorText.message : undefined;
  const style = styles(error);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        e.target && setUploadedImage(e.target.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);

      axios
        .post('http://localhost:3000/image/upload', formData, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
          },
          params: { prefix: 'services' }
        })
        .then(function (response) {
          if (response.data) {
            setImageFromApi(response.data._id);
          } else {
            console.log('NOT GOOD');
          }
        })
        .catch(function (error) {
          console.log('Error: ', error);
        });
    }
  }, [imageFile]);

  const onTextInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    onChange && onChange({ name: value, imageUrl: imageFromApi ?? null });
  }, [value, imageFromApi, onChange]);

  return (
    <div style={style.imageCardContainer}>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {uploadedImage ? (
        <div style={style.imageContainer}>
          <img
            src={uploadedImage}
            alt="imageFailedToRender"
            style={style.imageStyle}
          />
        </div>
      ) : (
        <div
          style={style.addImageContainer}
          onClick={() => fileInputRef.current?.click()}
        >
          <img
            src={PlusCircle}
            alt="imageFailedToRender"
            style={{ width: '50%', height: '50%' }}
          />
        </div>
      )}
      <div style={style.imageCardComponent}>
        <input
          {...rest}
          value={value}
          onChange={onTextInputChange}
          type="text"
          placeholder={label || 'Unesite text'}
          style={{
            paddingLeft: '5px',
            width: '100%',
            height: '100%',
            border: 'none',
            color: 'black',
            fontFamily: 'InterRegular'
          }}
          className={styled.input}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 1,
          right: 4,
          color: 'red',
          fontSize: '12px'
        }}
      >
        {error}
      </div>
    </div>
  );
};

export const ControlledEditableImageCard = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledEditableImageCardProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const { value, ...restField } = field;
        const { name, imageUrl } = value;
        return (
          <EditableImageCard
            {...restField}
            {...rest}
            defaultValue={name}
            image={imageUrl}
            errorText={fieldState.error}
          />
        );
      }}
    />
  );
};
