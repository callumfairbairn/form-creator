import { REQUIRED, requiredTextField, validateType } from "./CreateField";

describe("requiredTextField", () => {
  it("returns undefined for a valid input and an error for an invalid one", () => {
    expect(requiredTextField("valid label")).toEqual(undefined)
    expect(requiredTextField("")).toEqual(REQUIRED)
    expect(requiredTextField(undefined)).toEqual(REQUIRED)
  })
})

describe("validateType", () => {
  it("returns undefined for a valid input and an error for an invalid one", () => {
    expect(validateType("input")).toEqual(undefined)
    expect(validateType("textarea")).toEqual(undefined)
    expect(validateType("-")).toEqual(REQUIRED)
    expect(validateType("")).toEqual(REQUIRED)
    expect(validateType(undefined)).toEqual(REQUIRED)
  })
})
