import { ROUTES } from '../utils/routes';

export const PROTECTED_ROUTES = Object.keys(ROUTES.PROTECTED_ROUTES_NAMES).map((key, index) => ({
  id: index + 1,
  path: ROUTES.PROTECTED_ROUTES_NAMES[key],
  element: <h1>{key}</h1>,
}));
