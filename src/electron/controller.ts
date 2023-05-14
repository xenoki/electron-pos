import { app, IpcMainEvent } from 'electron';
import { Credential } from './renderer';
import loadDatabase from './database';

const db = loadDatabase(app, 'cpw');
const escpos = require('escpos');
escpos.USB = require('escpos-usb');

/**
 * Return Electron App Product name and version
 * @returns
 */
export function handleInfo() {
  return {
    version: app.getVersion(),
    name: app.getName(),
  };
}
/**
 * Authenticate user
 * @param event
 * @param credential
 * @returns
 */
export function handleAuth(event: IpcMainEvent, credential: Credential) {
  const { username, password } = credential;
  const user = db
    .prepare(
      `SELECT rowid, username FROM users WHERE username = ? AND password = ?`
    )
    .get([username, password]);

  if (user) {
    return { data: user };
  } else {
    return { error: 'invalid credential' };
  }
}
/**
 * Test Print
 * @param event
 * @param data
 * @returns
 */
export function handlePrint(event: IpcMainEvent, data: string[]) {
  if (escpos.USB.findPrinter().length !== 0) {
    const device = new escpos.USB();
    const options = { encoding: 'GB18030' };
    const printer = new escpos.Printer(device, options);

    device.open(function () {
      printer
        .font('A')
        .align('LT')
        .size(0.5, 0.5)
        .text('V&J Senter Pure Water')
        .text(`Daily Report`)
        .text(``)
        .text(``)
        .cut()
        .close();
    });
    return { status: 'success' };
  } else {
    return { status: 'printer not available' };
  }
}
/**
 * Close Application
 * @param event
 */
export function handleQuit(event: IpcMainEvent) {
  db.close();
  app.quit();
}
