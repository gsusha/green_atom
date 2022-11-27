import React from 'react';
import Title from '../../../components/title/title';
import TextField from '../../../components/textfield/textField';
import Radio from '../../../components/radio/radio';
import Progress from '../../../components/progress/progress';
import Button from '../../../components/button/button';
import { CgArrowLongRight } from 'react-icons/cg';
import UserLayout from '../../../layout/user/UserLayout';

function FirstStep() {
  return (
    <UserLayout>
      <form>
        <Title style={{ marginBottom: 10 }}>Шаг 1/3</Title>
        <Progress step={1} />
        <div className="description" style={{ marginBottom: 22 }}>
          Заполни <span>личные данные</span>:
        </div>
        <TextField type={'text'}>Имя *</TextField>
        <TextField type={'tel'}>Телефон *</TextField>
        <TextField type={'text'}>Telegram</TextField>
        <div className="description" style={{ marginBottom: 22 }}>
          И выбери <span>программу подготовки</span>, которая тебе интересна:
        </div>
        <Radio id={'Specialization'}>Case Lab ESB Express</Radio>
        <Radio id={'Specialization'}>Case Lab SUPPORT</Radio>
        <Radio id={'Specialization'}>Case Lab SAP Express</Radio>
        <Radio id={'Specialization'}>Case Lab WEB</Radio>
        <Radio id={'Specialization'}>Case Lab JavaScript</Radio>
        <Radio id={'Specialization'}>Case Lab 1С</Radio>
        <Button name="Дальше" to="/second" icon={<CgArrowLongRight />} />
      </form>
    </UserLayout>
  );
}

export default FirstStep;
