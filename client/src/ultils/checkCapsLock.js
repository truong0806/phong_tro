export const checkCapsLock = (setCapslock) => {
  const handleKeyDown = (event) => {
    const capsLockOn = event.getModifierState('CapsLock');
    if (capsLockOn) {
      console.log('Caps Lock is on!');
      setCapslock(true);
    } else {
      setCapslock(false);
      console.log('Caps Lock is off.');
    }
  };
  document.addEventListener('keydown', handleKeyDown);
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
};
