import { GasBuilder } from "./gas-builder";

class Gas{
    /**
     * @Units N/m^2
     */
    readonly pressure: number;
    /**
     * @Units kg/m^3
     */
    readonly density: number;
    /**
     * @Units J/kg*K
     */
    readonly idealGasConstant: number;
    /**
     * @Units K
     */
    readonly temperature: number;

    constructor(pressure: number, density: number, idealGasConstant: number, temperature: number) {
        this.pressure = pressure;
        this.density = density;
        this.idealGasConstant = idealGasConstant;
        this.temperature = temperature;
    }

    public static STANDARD_ERROR: number = 0.0001;

    public static builder(): GasBuilder {
        return new GasBuilder();
    }

}



export { Gas }
