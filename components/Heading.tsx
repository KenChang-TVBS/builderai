import React from 'react';

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = (props) => (
  <h1 className="my-heading">{props.title}</h1>
);

export default Heading;