import { CHANNEL } from '../../electron/channel';

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const capitalizeFirstLetter = (word: string) =>
  word.charAt(0).toLocaleUpperCase().concat(word.slice(1));

export async function handlePrint() {
  // const response = await window.electronAPI.print('Print stuff here');
  // const response = await window.api.invoke(CHANNEL.PRINT);
  const response = await window.api.invoke(CHANNEL.PRINT_REPORT);
  console.log({ response });
}
