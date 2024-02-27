// import React from 'react'

// type ListProps = {
//   items: number[] | string[];
//   onClick: (value: number| string) => void;
// };

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends string | number>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h1> List of item </h1>
      {items.map((item, index) => (
        <div key={index} onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

// export default List;
