'use client';
import { Builder } from '@builder.io/react';
import Counter from './components/Counter/Counter';
import Heading from './components/Heading';

Builder.registerComponent(Counter, {
  name: 'Counter',
  inputs: [
    {
      name: 'initialCount',
      type: 'number',
    },
  ],
});

Builder.registerComponent(Heading, { 
  name: 'Heading',
  inputs: [{ name: 'title', type: 'text' }],
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
})
