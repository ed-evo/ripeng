import Definizione from '~/model/Definizione';
import corpo from './corpo.json';
import emozioni from './emozioni.json';
import holidays from './holidays.json';
import trasporti from './trasporti.json';
import housework from './housework.json';

export default {
  corpo,
  emozioni,
  holidays,
  trasporti,
  housework
} as { [key: string]: Definizione[] }
