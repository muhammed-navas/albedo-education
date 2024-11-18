import React from 'react';
import { BoxTopHeadSection } from './BoxTopHeadSection';
import { Button } from './Button';
import { SingleBox } from './SingleBox';

const DataDisplayMainBox = ({ data , grid }) => {
  return (
    <div className='bg-gray-200 rounded-3xl p-6'>
      <BoxTopHeadSection 
        mTitle={data?.boxTopHeadSection?.mainTitle  } 
        fTitle={data.boxTopHeadSection.subTitle} 
        prop={data.boxTopHeadSection.headers} 
        grid={grid}
      />
      <div className='flex flex-col gap-4  mb-4'>
      {data.content.map((item, index) => (
        <SingleBox
          key={index}
          title={item.title}
          name={item.name}
          more={item.date}
          img={item.img}
          raiting={item.raiting}
          color={item.colorClass}
          grid={grid}
          btn={data?.button?.label}
          checkSubTitle={data.boxTopHeadSection.subTitle}
        />
        ))}
        </div>
        <div className='flex justify-end'>
        {grid === '1' && <Button title={data.button.label} /> }
        </div>
      
    </div>
  );
};

export default DataDisplayMainBox;
