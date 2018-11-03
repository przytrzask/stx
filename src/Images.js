// @flow
import * as React from 'react';
import { unstable_createResource } from 'react-cache'; //  eslint-disable-line

import styled from 'styled-components/macro';
import placeholder from './placeholder.svg';

const ImageResource = unstable_createResource(
  source =>
    new Promise(resolve => {
      const img = new Image();
      img.src = source;
      img.onload = resolve;
    }),
);

const Img = ({ src, ...props }) => {
  ImageResource.read(src);
  return <Picture src={src} alt="animal" {...props} />;
};

const Images = ({ images }: Props) => (
  <ImagesWrapper>
    {images &&
      images.map(image => (
        // flow-disable-next-line missing flow annotation
        <React.Suspense key={image} fallback={<Picture src={placeholder} />}>
          <Img key={image} src={image} />
        </React.Suspense>
      ))}
  </ImagesWrapper>
);

const Picture = styled.img`
  object-fit: scale-down;

  height: 250px;
  width: auto;
  margin: 10px;
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
`;

type Props = {
  images: string[] | null,
};

export default Images;
