const addBodyClass = (className: string): void => {
  document.body.classList.add(className);
};

const removeBodyClass = (className: string): void => {
  document.body.classList.remove(className);
};

export default {
  addBodyClass,
  removeBodyClass,
};
