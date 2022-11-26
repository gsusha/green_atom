import * as React from 'react';
import Title from '../../../components/title/title';
import Button from '../../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';
import logo from '../../../assets/images/greenlab_logo.svg';
import './styles.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailEvent } from './store/mainSlice';
import { Circles } from 'react-loader-spinner';

function UserMain() {
  const dispatch = useAppDispatch() as any;
  const params = useParams() as { id: string };

  const [loading, setLoading] = useState(true);
  const [noPromo, setNoPromo] = useState(false);

  const event = useAppSelector(({ event }) => event);

  const eventId = '2';

  useEffect(() => {
    if (eventId) {
      setLoading(true);
      dispatch(getDetailEvent(eventId))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .then((action) => !action.payload && setNoPromo(true))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch, params]);

  if (loading) {
    return <Circles />;
  }

  return (
    <div className="user-main-wrapper">
      <img src={logo} alt="IT стажировки Росатома" />
      <Title style={{ marginBottom: 22, alignSelf: 'start' }}>{event ? event.name : ''}</Title>
      <div className="description" style={{ marginBottom: 44 }}>
        Заполни форму и получи возможность начать карьеру в <span>крупной цифровой компании </span>
        ещё во время обучения в университете
      </div>

      <Button name="Начать" to="/first" icon={<CgArrowLongRight />} />
    </div>
  );
}

export default UserMain;