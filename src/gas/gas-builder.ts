import { Gas } from "./gas";

class GasBuilder {
    private pressure?: number;
    private density?: number;
    private idealGasConstant?: number;
    private temperature?: number;

    // general

    public withPressure(pressure: number): GasBuilder {
        this.pressure = pressure;
        return this;
    }

    public withDensity(density: number): GasBuilder {
        this.density = density;
        return this;
    }

    public withIdealGasConstant(idealGasConstant: number): GasBuilder {
        this.idealGasConstant = idealGasConstant;
        return this;
    }

    public withTemperature(temperature: number): GasBuilder {
        this.temperature = temperature;
        return this;
    }

    // aerodynamics STP

    public withSTPPressure(): GasBuilder {
        return this.withPressure(101325);
    }

    public withSTPDensity(): GasBuilder {
        return this.withDensity(0);
    };

    public withSTPIdealGasConstant(): GasBuilder {
        return this.withIdealGasConstant(287.05);
    }

    public withSTPTemperature(): GasBuilder {
        return this.withTemperature(288.15);
    }

    // builder stuff

    public build(): Gas {
        const numDefined: number = this.numDefined();

        // check requirements for building

        if (numDefined < 3) {
            throw new Error("Invalid Gas Build - Failed requirements to build");
        }

        // if all 4 specified, check that they are valid

        if (numDefined === 4) {
            if (this.pressure === undefined || this.density === undefined || this.idealGasConstant === undefined || this.temperature === undefined) {
                throw new Error("Invalid Gas Build - Internal error")
            }
            if (this.pressure - this.density * this.idealGasConstant * this.temperature < Gas.STANDARD_ERROR) {
                throw new Error("Invalid Gas Build - Failed validation check")
            }
            return this.buildAll();
        }

        // check cases

        if (this.pressure === undefined) {
            return this.buildPressure();
        }

        if (this.density === undefined) {
            return this.buildDensity();
        }

        if (this.idealGasConstant === undefined) {
            return this.buildIdealGasConstant();
        }

        if (this.temperature === undefined) {
            return this.buildTemperature();
        }

        throw new Error("Invalid Gas Build - Internal error")

    }

    private numDefined(): number {
        let numDefined: number = 0;
        if (this.pressure !== undefined) numDefined++;
        if (this.density !== undefined) numDefined++;
        if (this.idealGasConstant !== undefined) numDefined++;
        if (this.temperature !== undefined) numDefined++;
        return numDefined;
    }

    private buildPressure(): Gas {
        if (this.density === undefined || this.idealGasConstant === undefined || this.temperature === undefined) {
            throw new Error("Invalid Gas Build - Invalid pressure build");
        }
        this.pressure = this.density * this.idealGasConstant * this.temperature;
        return this.buildAll();
    }

    private buildDensity(): Gas {
        if (this.pressure === undefined || this.idealGasConstant === undefined || this.temperature === undefined) {
            throw new Error("Invalid Gas Build - Invalid density build");
        }
        this.density = this.pressure / (this.idealGasConstant * this.temperature);
        return this.buildAll();
    }

    private buildIdealGasConstant(): Gas {
        if (this.pressure === undefined || this.density === undefined || this.temperature === undefined) {
            throw new Error("Invalid Gas Build - Invalid ideal gas constant build");
        }
        this.idealGasConstant = this.pressure / (this.density * this.temperature);
        return this.buildAll();
    }

    private buildTemperature(): Gas {
        if (this.pressure === undefined || this.density === undefined || this.idealGasConstant === undefined) {
            throw new Error("Invalid Gas Build - Invalid density build");
        }
        this.temperature = this.pressure / (this.density * this.idealGasConstant);
        return this.buildAll();
    }

    private buildAll(): Gas {
        if (this.pressure === undefined || this.density === undefined || this.idealGasConstant === undefined || this.temperature === undefined) {
            throw new Error("Invalid Gas Build - Tried to build without all arguments defined");
        }
        return new Gas(this.pressure, this.density, this.idealGasConstant, this.temperature);
    }

}

export { GasBuilder }
