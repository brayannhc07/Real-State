import React from 'react';
import styled from 'styled-components';

const Gallery = props => {

  const images = [
    "assets/images/common/gallery/image-01.webp",
    "assets/images/common/gallery/image-02.jpg",
    "assets/images/common/gallery/image-03.jpg",
    "assets/images/common/gallery/image-04.jpg",
    "assets/images/common/gallery/image-05.jpg",
    "assets/images/common/gallery/image-06.jpg",
  ]

  return (
    <SectionContainer className="row p-4">
      <div className="col-12">
        <h2 className="text-center my-4">Galería</h2>
      </div>
      <div className="col-12">
        <div className="container">
          <div className="row">
            {
              images.map((image, index) => {
                return (
                  <div className="col-12 col-sm-6 col-lg-4 mb-2 text-center" key={index} style={{ overflow: 'hidden' }}>
                    <img src={image} alt="" className="rounded w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  background-color: #e5e5e5;
`;

export default Gallery;
