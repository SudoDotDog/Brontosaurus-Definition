/**
 * @author WMXPY
 * @namespace Definition
 * @description Definition
 */

import { Base64Converter, IBrontosaurusBody, IBrontosaurusHeader, IBrontosaurusToken, Signer } from "./declare";

export class BrontosaurusDefinition {

    public static withEncoder(encoder: Base64Converter, decoder: Base64Converter): BrontosaurusDefinition {

        return new BrontosaurusDefinition(encoder, decoder);
    }

    public static signWith(header: string, body: string, signer: Signer): string {

        const medium: string = [header, body].join('.');
        const signature: string = signer(medium);
        return this.concat(header, body, signature);
    }

    public static concat(header: string, body: string, signature: string): string {

        return [header, body, signature].join('.');
    }

    private readonly _encoder: Base64Converter;
    private readonly _decoder: Base64Converter;

    private constructor(encoder: Base64Converter, decoder: Base64Converter) {

        this._encoder = encoder;
        this._decoder = decoder;
    }

    public header(header: IBrontosaurusHeader): string {

        return this._encoder(JSON.stringify(header));
    }

    public body(body: IBrontosaurusBody): string {

        return this._encoder(JSON.stringify(body));
    }

    public decouple(token: string): IBrontosaurusToken | null {

        const splited: string[] = token.split('.');
        if (splited.length !== 3) {
            return null;
        }

        const [header, body, signature] = splited;

        return {
            header: JSON.parse(this._decoder(header)),
            body: JSON.parse(this._decoder(body)),
            signature,
        };
    }
}
