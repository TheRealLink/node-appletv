/// <reference types="node" />
declare const dnssd: any;
import { Server, Socket } from 'net';
import { AppleTV } from './appletv';
import { PairingServer } from './pairing';
import { Credentials } from './credentials';
import { Message } from './message';
export interface Client {
    uid: string;
    name: string;
    credentials?: Credentials;
    socket: Socket;
    pairingServer?: PairingServer;
}
export declare class TVServer extends AppleTV {
    advertisement: typeof dnssd.Advertisement;
    server: Server;
    clients: Client[];
    private credentialsStore;
    constructor(name: string, port: number, uid?: string, server?: Server);
    start(): Promise<this>;
    didReceiveMessage(message: Message, socket: Socket): Promise<void>;
    bindClient(socket: Socket): void;
    registerClient(newClient: Client, socket?: Socket, message?: Message): Promise<void>;
    private getClient;
    stop(): void;
}
export {};
