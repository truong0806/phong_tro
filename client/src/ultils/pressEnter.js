export const pressEnter = (cb)=>{
    const listener = (event) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
          event.preventDefault();
          cb()
        }
      };
      document.addEventListener('keydown', listener);
      return () => {
        document.removeEventListener('keydown', listener);
      };
}