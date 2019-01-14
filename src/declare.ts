/**
 * @author WMXPY
 * @namespace Definition
 * @description Declare
 */

export type Basics = string | number | boolean;
export type Encryptable = Basics | null | undefined | Basics[] | Record<string, Basics>;

export type EncryptableObject = Record<string, Encryptable>;

export interface IBrontosaurusBody extends EncryptableObject {

    username: string;
    groups: string[];

    infos: Record<string, Basics>;
}

export interface IBrontosaurusHeader extends EncryptableObject {

    expireAt: number;
    issuedAt: number;

    key: string;
}

export type Base64Converter = (before: string) => string;
