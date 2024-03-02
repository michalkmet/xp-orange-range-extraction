const rangeExtraction = require('./range-extraction');

describe('User Story 1: max 2 numbers', () => {
  it("UAT1.1 When I pass [0] then I should see '0'", () => {
    expect(rangeExtraction([0])).toBe('0');
  });
  it("UAT1.2 When I pass [1] then I should see '1'", () => {
    expect(rangeExtraction([1])).toBe('1');
  });
  it("UAT1.3 When I pass [0, 1] then I should see '0,1'", () => {
    expect(rangeExtraction([0, 1])).toBe('0,1');
  });
  it("UAT1.4 When I pass [-3, -1] then I should see '-3,-1'", () => {
    expect(rangeExtraction([-3, -1])).toBe('-3,-1');
  });
});

describe('User Story 2: max 6 numbers', () => {
  it("UAT2.1 When I pass [-1, 0, 1] then I should see '-1-1'", () => {
    expect(rangeExtraction([-1, 0, 1])).toBe('-1-1');
  });
  it("UAT2.2 When I pass [0, 1, 2] then I should see '0-2'", () => {
    expect(rangeExtraction([0, 1, 2])).toBe('0-2');
  });
  it("UAT2.3 When I pass [0, 1, 2, 3, 5] then I should see '0-3,5'", () => {
    expect(rangeExtraction([0, 1, 2, 3, 5])).toBe('0-3,5');
  });
  it("UAT2.4 When I pass [1, 2, 3, 5, 6] then I should see '1-3,5,6'", () => {
    expect(rangeExtraction([1, 2, 3, 5, 6])).toBe('1-3,5,6');
  });
});
