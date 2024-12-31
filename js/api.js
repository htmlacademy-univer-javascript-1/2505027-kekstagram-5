const getData = async () => {
  try {
    const response = await fetch('https://29.javascript.htmlacademy.pro/kekstagram/data');
    if (!response.ok) {
      throw new Error('Ошибка загрузки данных');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Ошибка загрузки данных');
  }
};


const sendData = async (body) => {
  try {
    const response = await fetch('https://29.javascript.htmlacademy.pro/kekstagram', {
      method: 'POST',
      body,
    });
    if (!response.ok) {
      throw new Error('Ошибка отправки формы');
    }
  } catch (error) {
    throw new Error('Ошибка отправки формы');
  }
};


export {getData, sendData};
