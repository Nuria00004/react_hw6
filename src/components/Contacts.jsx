import React from 'react';
import './Contacts.css'

function Contacts() {
  return (
    <div>
      <h1 className='contacts'>Контакты</h1>
      <p>Если у вас есть вопросы или вы хотите связаться со мной, вы можете воспользоваться следующими способами:</p>
      <ul>
        <li className='data'>Email:</li>
        <li className='data2'>nuriarustambekova4@gmail.com</li>
        <li className='data'>Телефон:</li>
        <li className='data2'>+996 123 456-789</li>
        <li className='data'>Адрес:</li>
        <li className='data2'>Бишкек, Кыргызстан</li>
      </ul>
    </div>
  );
}


export default Contacts;
