
describe('checkStatus', () => {
  test('should return "Tin hết hạn" if the given day is in the past', () => {
    const day = '01/01/2022';
    const result = checkStatus(day);
    expect(result).toEqual('Tin hết hạn');
  });

  test('should return "Tin đang hiển thị" if the given day is today', () => {
    const day = moment().format('DD/MM/YYYY');
    const result = checkStatus(day);
    expect(result).toEqual('Tin đang hiển thị');
  });

  test('should return "Tin đang hiển thị" if the given day is in the future', () => {
    const day = '01/01/2023';
    const result = checkStatus(day);
    expect(result).toEqual('Tin đang hiển thị');
  });
});