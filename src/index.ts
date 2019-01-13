/**
 * @author WMXPY
 * @namespace Definition
 * @description Index
 */

export type Basics = string | number | boolean;
export type Encryptable = Basics | null | undefined | Basics[];

export type EncryptableObject = Record<string, Encryptable>;

export interface IBrontosaurusBody extends EncryptableObject {

    application: string;

    username: string;
    groups: string[];

    infos: string[];
}

export interface IBrontosaurusHeader extends EncryptableObject {

    expireAt: number;
    issuedAt: number;
    key?: string;
}
