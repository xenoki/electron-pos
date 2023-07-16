import { CHANNEL } from '../../electron/channel';

export default function printReport() {
  window.api.invoke(CHANNEL.PRINT_REPORT, null);
}
