import React, { useState } from 'react';
import './styles.scss';

interface IProps {
  id: string;
  children: string;
}

export default function Radio(props: IProps) {
  // TODO: на уровень выше и индекс
  const [isActive, setActive] = useState(false);

  return (
    <label htmlFor={props.id} className={`radio ${isActive ? 'active' : ''}`} onClick={() => setActive(!isActive)}>
      {props.children}
      <input id={props.id} name={props.id} type={'radio'} />
    </label>
  );
}
