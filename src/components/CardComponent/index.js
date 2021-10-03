import React, { useContext } from 'react';
import { Card, Image, Typography } from 'antd';
import placeholder from 'assets/images/placeholder-vertical.jpg';
import { AppContext } from 'context/AppContext';

const { Meta } = Card;
const { Paragraph } = Typography;

export default function CardComponent({ title, img, year, onClick }) {
  const { isMobile } = useContext(AppContext);

  if (!title && !img) {
    return '';
  }
  return (
    <Card
      style={{ width: '100%', maxWidth: isMobile ? '245px' : '100%' }}
      hoverable
      cover={
        <Image
          src={img}
          fallback={placeholder}
          style={{ maxHeight: '380px' }}
        />
      }
    >
      <Meta
        onClick={onClick}
        title={<Paragraph ellipsis={true}>{title}</Paragraph>}
        description={year}
      />
    </Card>
  );
}
