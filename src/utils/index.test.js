import { filterMapper } from 'utils';

describe('UITILS', () => {
  it('filterMapper - updated', () => {
    const result = filterMapper('0');
    expect(result).toEqual('updated');
  });

  it('filterMapper - created', () => {
    const result = filterMapper('1');
    expect(result).toEqual('created');
  });

  it('filterMapper - fullname', () => {
    const result = filterMapper('2');
    expect(result).toEqual('fullname');
  });

  it('filterMapper - pushed', () => {
    const result = filterMapper('3');
    expect(result).toEqual('pushed');
  });

  it('filterMapper - default', () => {
    const result = filterMapper();
    expect(result).toEqual('updated');
  });
});
