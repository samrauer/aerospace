Courant-Friedrichs-Lewy number can be thought of how large of time steps the CFD solver uses when converging on a solution. In mach-reynolds number regions that are hard to converge, a lower CFL number can be used to get more consistent results. 

A higher CFL number (>50) will move to the final solution fast but has a chance to not converge.

A lower CFL number (<10) will move slowly to the final solution but will have a better chance at avoiding cyclic solutions.


[Wikipedia link](https://en.wikipedia.org/wiki/Courant%E2%80%93Friedrichs%E2%80%93Lewy_condition)

