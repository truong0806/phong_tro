export const checkCapsLock = (setCapslock) => {
  const handleKeyDown = (event) => {
    const capsLockOn = event.getModifierState('CapsLock');
    if (capsLockOn) {
      setCapslock(true);
    } else {
      setCapslock(false);
    }
  };
  document.addEventListener('keydown', handleKeyDown);
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
};
