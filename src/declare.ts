/**
 * @author WMXPY
 * @namespace Definition
 * @description Declare
 */

export enum DEFAULT_BRONTOSAURUS_NAMESPACE {

    DEFAULT = "brontosaurus.default",
    ADMIN = "brontosaurus.admin",
}

export type Basics = string | number | boolean;
export type Encryptable = Basics | Basics[] | Record<string, Basics> | null | undefined;

export type EncryptableObject = Record<string, Encryptable>;

export interface IBrontosaurusBody extends EncryptableObject {

    readonly username: string;
    readonly namespace: string;
    readonly mint: string;
    readonly groups: string[];
    readonly tags: string[];
    readonly infos: Record<string, Basics>;
    readonly beacons: Record<string, Basics>;
    readonly modifies: string[];

    readonly avatar?: string;
    readonly email?: string;
    readonly phone?: string;
    readonly displayName?: string;
    readonly organization?: string;
    readonly organizationTags?: string[];
}

export interface IBrontosaurusHeader extends EncryptableObject {

    readonly algorithm: "RSA-SHA256";
    readonly alg: "RS256";
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
