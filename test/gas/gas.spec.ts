import { expect } from 'chai'
import { GasBuilder } from "src/gas/gas-builder";
import { Gas } from "src/gas/gas";

describe("gas tests", () => {
    describe("constructor tests", () => {
        const toTest: Gas = new Gas(1, 1, 1, 1);

        expect(toTest.pressure).to.eq(1);
        expect(toTest.density).to.eq(1);
        expect(toTest.idealGasConstant).to.eq(1);
        expect(toTest.temperature).to.eq(1);
    });

    describe("builder tests", () => {
        const toTest: GasBuilder = Gas.builder();

        expect(toTest).to.not.be.null;
    });
});
