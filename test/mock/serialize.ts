/**
 * @author WMXPY
 * @namespace Mock
 * @description Serialize
 */

export const serializeObject = (before: string): string => {

    const buffer: Buffer = Buffer.from(before);
    const base64: string = buffer.toString('base64');

    return base64;
};

export const deserializeString = (before: string): string => {

    const buffer: Buffer = Buffer.from(before, 'base64');
    const content: string = buffer.toString('utf8');

    return content;
};
