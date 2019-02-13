/**
 * @author WMXPY
 * @namespace Definition
 * @description Declare
 */

export type Basics = string | number | boolean;
export type Encryptable = Basics | Basics[] | Record<string, Basics> | null | undefined;

export type EncryptableObject = Record<string, Encryptable>;

export interface IBrontosaurusBody extends EncryptableObject {

    readonly username: string;
    readonly mint: string;
    readonly groups: string[];
    readonly infos: Record<string, Basics>;
    readonly beacons: Record<string, Basics>;
}

export interface IBrontosaurusHeader extends EncryptableObject {

    readonly expireAt: number;
    readonly issuedAt: number;
    readonly key: string;
}

export interface IBrontosaurusToken {

    readonly header: IBrontosaurusHeader;
    readonly body: IBrontosaurusBody;
    readonly signature: string;
}

export type Base64Converter = (before: string) => string;
export type Signer = (content: string) => string;
