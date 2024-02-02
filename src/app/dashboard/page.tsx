import React from 'react';
import LineChart from './line-Chart'; // Assure-toi que le nom de ton composant commence par une majuscule
import Aurevoir from '@/components/Aurevoir';

function Page() {
  return (
    <div>
      <LineChart></LineChart>
      <Aurevoir/>
    </div>
  );
}

export default Page;
