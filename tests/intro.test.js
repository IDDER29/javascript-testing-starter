import { describe, test, it, expect } from "vitest";
import { calculateAverage, calculateFactorial, fizzBuzz, max } from "../src/intro";

describe("max", () => {
    it("should return the greater argument ", () => {
        expect(max(1, 2)).toBe(2);
        expect(max(3, 2)).toBe(3);
        expect(max(2, 2)).toBe(2);
    });
})

describe("fizzBuzz", () => {
    it("should return FizzBuzz if the argument is divisible by 3 and 5 ", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    it("should return Fizz f the argument is divisible by 3 ", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });

    it("should return Buzz f the argument is divisible by 5", () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });

    it("should return the argument number that we pass as a string", () => {
        expect(fizzBuzz(13.5)).toBe("13.5");
    });
})

describe("calculateAverage", () => {
    describe("when given an empty array", () => {
        it("should return NaN", () => {
            expect(calculateAverage([])).toBe(NaN);
        });
    });
    describe("when given an array of numbers with just one element", () => {
        it("should return the number it slef", () => {
            expect(calculateAverage([1])).toBe(1);
            expect(calculateAverage([2])).toBe(2);
            expect(calculateAverage([15])).toBe(15);
        });
    });

    describe("when given an array of numbers ", () => {
        it("should return the average numbers in the array", () => {
            expect(calculateAverage([1, 2])).toBe(1.5);
            expect(calculateAverage([2, 4])).toBe(3);
            expect(calculateAverage([15, 5])).toBe(10);
        });
    });
});

describe("calculateFactorial", () => {
    describe("when given 0", () => {
        it("should return 1", () => {
            expect(calculateFactorial(0)).toBe(1);
        });
    });

    describe("when given 1", () => {
        it("should return 1", () => {
            expect(calculateFactorial(1)).toBe(1);
        });
    });

    describe("when given positive integers greater than 1", () => {
        it("should return the correct factorial", () => {
            expect(calculateFactorial(2)).toBe(2);
            expect(calculateFactorial(3)).toBe(6);
            expect(calculateFactorial(4)).toBe(24);
            expect(calculateFactorial(5)).toBe(120);
            expect(calculateFactorial(6)).toBe(720);
        });
    });

    describe("edge cases", () => {
        it("should throw an error for negative numbers", () => {
            expect(() => calculateFactorial(-1)).toThrow();
        });

        it("should throw an error for non-integer inputs", () => {
            expect(() => calculateFactorial(2.5)).toThrow();
        });
    });
});