const rangeExtraction = require('./range-extraction');

describe('User Story 1: max 2 numbers', () => {
  it("UAT1.1 When I pass [0] then I should see '0'", () => {
    expect(rangeExtraction([0])).toBe('0');
  });
});
