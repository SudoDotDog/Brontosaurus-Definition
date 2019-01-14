/**
 * @author WMXPY
 * @namespace Definition
 * @description Index
 * @package Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { BrontosaurusDefinition } from "../../src/index";
import { deserializeString, serializeObject } from "../mock/serialize";

describe('Given {BrontosaurusDefinition} class', (): void => {

    const chance: Chance.Chance = new Chance('brontosaurus-definition');

    it('should be able to construct object', (): void => {

        const definition: BrontosaurusDefinition = BrontosaurusDefinition.withEncoder(serializeObject, deserializeString);

        expect(definition).to.be.instanceOf(BrontosaurusDefinition);
    });
});
