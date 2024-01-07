import { useLocation } from 'react-router-dom';
import menuSider from '../menuSider';

export const usePathname = () => {
  const location = useLocation();
  const pagetitle = menuSider.filter((item) => {
    return `${item.path}` === location.pathname.split('/')[2];
  });
  return pagetitle;
}
