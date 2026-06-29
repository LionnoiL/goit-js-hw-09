const formData = { email: '', message: '' };
const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.querySelector('#email');
const messageEl = formEl.querySelector('#message');

const keyStorage = 'feedback-form-state';
try {
  const savedFormData = JSON.parse(localStorage.getItem(keyStorage));
  if (savedFormData) {
    formData.email = savedFormData.email;
    formData.message = savedFormData.message;

    emailEl.value = savedFormData.email;
    messageEl.value = savedFormData.message;
  }
} catch (error) {}

formEl.addEventListener('input', e => {
  const { email, message } = e.currentTarget.elements;

  formData.email = email.value;
  formData.message = message.value;

  localStorage.setItem(keyStorage, JSON.stringify(formData));
});

formEl.addEventListener('submit', e => {
  e.preventDefault();
  if (!emailEl.value || !messageEl.value) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  formEl.reset();
  localStorage.removeItem(keyStorage);

  formData.email = '';
  formData.message = '';
});
