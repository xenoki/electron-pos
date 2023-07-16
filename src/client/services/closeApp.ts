import { CHANNEL } from '../../electron/channel';

export default function closeApp() {
  window.api.invoke(CHANNEL.QUIT, null);
}
