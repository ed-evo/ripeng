import Definizione from '~/model/Definizione';
import corpo from './corpo.json';
import emozioni from './emozioni.json';
import holidays from './holidays.json';

export default {
  corpo,
  emozioni,
  holidays,
} as { [key: string]: Definizione[] }
