const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('#upload-file');
const previewImage = document.querySelector('.img-upload__preview img');
const previewSmallImages = document.querySelectorAll('.effects__preview');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));
  if (matches) {
    const url = URL.createObjectURL(file);
    previewImage.src = url;
    previewSmallImages.forEach((element) => {
      element.style.backgroundImage = `url(${url})`;
    });
    previewImage.src = URL.createObjectURL(file);
  }
});
