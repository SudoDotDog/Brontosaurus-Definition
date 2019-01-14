/**
 * @author WMXPY
 * @namespace Definition
 * @description Declare
 */

import { Base64Converter, IBrontosaurusHeader, IBrontosaurusBody, Basics } from "./declare";

export class BrontosaurusDefinition {

    public static withEncoder(encoder: Base64Converter, decoder: Base64Converter) {

        return new BrontosaurusDefinition(encoder, decoder);
    }

    private readonly _encoder: Base64Converter;
    private readonly _decoder: Base64Converter;

    private constructor(encoder: Base64Converter, decoder: Base64Converter) {

        this._encoder = encoder;
        this._decoder = decoder;
    }

    public header(
        expireAt: number,
        issuedAt: number,
        key: string,
    ): string {

        const header: IBrontosaurusHeader = {
            expireAt,
            issuedAt,

            key,
        };

        return this._encoder(JSON.stringify(header));
    }

    public body(
        username: string,
        groups: string[],
        infos: Record<string, Basics>,
    ): string {

        const body: IBrontosaurusBody = {
            username,
            groups,

            infos,
        };

        return this._encoder(JSON.stringify(body));
    }
}
