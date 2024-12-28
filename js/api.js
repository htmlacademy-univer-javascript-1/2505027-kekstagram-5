const getData = () => {
  fetch ('https://29.javascript.htmlacademy.pro/kekstagram/data')
    .then((responce) => responce.json()).catch(() => {
      throw new Error('Ошибка загрузки данных');
    });
};

const sendData = (body) => fetch ('https://29.javascript.htmlacademy.pro/kekstagram',
  {method: 'POST', body}).then((responce) => {
  if (!responce.ok) {
    throw new Error('Ошибка отправки формы');
  }
}).catch(() => {
  throw new Error('Ошибка отправки формы');
});


export {getData, sendData};
