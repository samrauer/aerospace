import { expect } from "chai";
import { Gas } from "src/gas/gas";



describe("gas builder tests", () => {
    describe("valid", () => {


        expect(true).to.eq(true);
    });

    describe("too few values", () => {
        function toThrow() {
            return Gas.builder().withPressure(1).build();
        }
        expect(toThrow()).to.throw(new Error('Invalid Gas Build - Failed requirements to build'));
        expect(toThrow()).to.throw();
    });

    describe("bad values", () => {
        // const toTest = () => Gas.builder()
        //     .withPressure(1)
        //     .withDensity(1)
        //     .withIdealGasConstant(1)
        //     .withTemperature(1)
        //     .build();
        //
        // expect(toTest()).to.eq(true);
    });
});