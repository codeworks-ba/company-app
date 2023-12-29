import React, { ChangeEventHandler, useRef, useState } from 'react';
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps
} from 'react-hook-form';
import { styles } from './CircularImage.styles';
import PlusCircle from '../../images/plusCircle.svg';

type ControlledImageInputProps<T extends FieldValues> = UseControllerProps<T> &
  ImageInputProps;

type ImageInputProps = {
  image?: string;
  error?: FieldError;
  borderRadius: string;
  onChange?: (image: string) => void;
  onFileChange?: (file: File) => void;
};

const ImageInput: React.FC<ImageInputProps> = ({
  image,
  error,
  onChange,
  onFileChange,
  borderRadius
}) => {
  const [uploadedImage, setUploadedImage] = useState<string | undefined>(image);
  const errorText = error ? error.message : undefined;
  const style = styles(borderRadius, errorText);

  const headerImageRef = useRef<HTMLInputElement>(null);

  const handleHeaderImageChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (file) {
        onFileChange && onFileChange(file);
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target!!.result as string);
        onChange && onChange(e.target!!.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <input
        type="file"
        accept="image/*"
        ref={headerImageRef}
        style={{ display: 'none' }}
        onChange={handleHeaderImageChange}
      />
      <div
        style={style.imageWrapper}
        onClick={() => headerImageRef.current?.click()}
      >
        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt="failedToRender"
            style={style.imageStyle}
          />
        ) : (
          <img
            src={PlusCircle}
            alt="addImage"
            style={{ width: '50%', height: '50%' }}
          />
        )}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '-13px',
          fontSize: '12px',
          color: 'red'
        }}
      >
        {errorText}
      </div>
    </div>
  );
};

export const ControlledImageInput = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledImageInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <ImageInput
          {...field}
          {...rest}
          image={field.value}
          error={fieldState.error}
        />
      )}
    />
  );
};
