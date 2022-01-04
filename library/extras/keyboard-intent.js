// intent for using keyboard

document.addEventListener('click', () => {
  if (document.body.classList.contains('keyboard-intent')) {
    document.body.classList.remove('keyboard-intent');
  }
});
document.addEventListener('keydown', () => {
  if (!document.body.classList.contains('keyboard-intent')) {
    document.body.classList.add('keyboard-intent');
  }
});
