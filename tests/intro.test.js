import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe("max", () => {
    it("should return the greater argument ", () => {
        expect(max(1, 2)).toBe(2);
        expect(max(3, 2)).toBe(3);
        expect(max(2, 2)).toBe(2);
    });
})

describe("fizzBuzz", () => {
    it("should return FizzBuzz ", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    it("should return Fizz ", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });

    it("should return Buzz ", () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });
})