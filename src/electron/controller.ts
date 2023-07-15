import { app, dialog, IpcMainEvent } from 'electron';
import { Credential } from './renderer';
import loadDatabase from './database';
import fs from 'fs';
import { CHANNEL } from './channel';

const { db, dbFile } = loadDatabase(app, 'cpw');
const escpos = require('escpos');
escpos.USB = require('escpos-usb');

/**
 * Get the name and version from package.json
 */
export function getAppInfo() {
  return {
    version: app.getVersion(),
    name: app.getName(),
  };
}

/**
 *
 * @param event
 * @param credential
 * @returns
 */
export function authenticate(event: IpcMainEvent, credential: Credential) {
  const { username, password } = credential;

  const user = db
    .prepare(
      `SELECT rowid, username FROM users WHERE username = ? AND password = ?`
    )
    .get([username, password]);

  return user ? { data: user } : { error: 'invalid credential' };
}
/**
 *
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
 * Close Pos of Sales Electron Application
 * @param event
 */
export function closeApp(event: IpcMainEvent) {
  console.log('closing database and app');
  db.close();
  app.quit();
}
/**
 * Add new membership to database
 * @param event
 * @param data
 * @returns
 */
export function addMembership(event: IpcMainEvent, data: any) {
  const keys = Object.keys(data);
  const values = keys.map((column) => data[column]);

  const sql = `INSERT INTO memberships(${keys.toString()}) VALUES(${keys.map(
    () => '?'
  )})`;

  const result = db.prepare(sql).run([...values]);
  console.log({ result });
  return result;
}
/**
 * Backup up database
 * @param event
 * @param data
 */
export function backupDatabase(event: IpcMainEvent, data: any) {
  console.log('backup:database');

  dialog
    .showSaveDialog({
      properties: ['showOverwriteConfirmation'],
      defaultPath: `cpw.sqlite3`,
      filters: [{ name: 'Sqlite3', extensions: ['sqlite3'] }],
    })
    .then(({ filePath }) => {
      if (filePath) {
        console.log(filePath, dbFile);
        fs.copyFile(dbFile, filePath, (err) => {
          console.log(err);

          event.sender.send(CHANNEL.BACKUP, {
            status: true,
            date: `${new Date().toLocaleDateString().trim()}`,
          });
        });
      } else {
        event.sender.send(CHANNEL.BACKUP, { status: false, date: '' });
      }
    });
}

export function backup(event: IpcMainEvent, data: any) {
  dialog
    .showSaveDialog({
      properties: ['showOverwriteConfirmation'],
      defaultPath: `cpw.sqlite3`,
      filters: [{ name: 'Sqlite3', extensions: ['sqlite3'] }],
    })
    .then(({ filePath }) => {
      if (filePath) {
        console.log(filePath, dbFile);
        fs.copyFile(dbFile, filePath, (err) => {
          return {
            status: true,
            date: `${new Date().toLocaleDateString().trim()}`,
          };
        });
      } else {
        return { status: false, date: '' };
      }
    });
}
/**
 *
 * @param event
 * @param data
 */
export function printDailyReport(event: IpcMainEvent, data: any) {
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
 *
 * @param event
 * @param data
 */
export function getLastRecord(event: IpcMainEvent, data: any) {}

/**
 *
 * @param event
 * @param data
 */
export function getHistory(event: IpcMainEvent, data: any) {}

/**
 *
 * @param event
 * @param data
 */
export function renewGallon(event: IpcMainEvent, data: any) {}
/**
 *
 * @param event
 * @param data
 */
export function deleteMembership(event: IpcMainEvent, data: any) {
  console.log('delete:record', data);
  const result = db
    .prepare(`DELETE FROM memberships WHERE record = ?`)
    .run([data]);
  return result;
}
/**
 *
 * @param event
 * @param data
 */
export function editMembership(event: IpcMainEvent, data: any) {}

/**
 *
 * @param event
 * @param data
 */
export function findMembership(event: IpcMainEvent, data: any) {}
