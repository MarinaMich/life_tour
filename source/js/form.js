const labelPhone = document.querySelector('label[for=phone]');
const inputPhone = document.querySelector('input[id=phone]');
const labelEmail = document.querySelector('label[for=email]');
const inputEmail = document.querySelector('input[id=email]');
const buttonForm = document.querySelector('.form__button');
const form = document.querySelector('.form__form');
const inputs = form.querySelectorAll('.form__input');

//скрывает label при клике на поле ввода и возвращает при потери фокуса

labelPhone.addEventListener('click', () => {
  labelPhone.style.display = 'none';
});

inputPhone.onblur = () => {
  if(inputPhone.value.length === 0 && labelPhone.style.display === 'none') {
    labelPhone.style.display = 'block';
  }
};

labelEmail.addEventListener('click', () => {
  labelEmail.style.display = 'none';
});

inputEmail.onblur = () => {
  if(inputEmail.value.length === 0 && labelEmail.style.display === 'none') {
    labelEmail.style.display = 'block';
  }
};

//после клика на кнопку отправки выводит ошибки при неверном заполнении

buttonForm.addEventListener('click', () => {
  inputs.forEach((input) => {
    if(input.reportValidity() === false) {
      input.classList.add('form__input--invalid');
    } else {
      input.classList.remove('form__input--invalid');
    }
  });
});

