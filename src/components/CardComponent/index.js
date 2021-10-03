import React from 'react';
import { Card, Image, Skeleton, Typography } from 'antd';
import placeholder from 'assets/images/placeholder-vertical.jpg';

const { Meta } = Card;
const { Paragraph } = Typography;

export default function CardComponent({ title, img, year, onClick }) {
  if (!title && !img) {
    return '';
  }
  return (
    <Card
      style={{ width: '100%' }}
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
