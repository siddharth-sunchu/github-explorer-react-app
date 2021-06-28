import { fetchCommitsFromGithubForRepo } from 'api';

describe('Fetch Commits', () => {
  window.fetch = jest.fn();

  it('Success Response', async () => {
    window.fetch.mockImplementation((apiUrl) => {
        expect(apiUrl).toEqual('https://api.github.com/repos/test/test/commits?per_page=5&sort=updated:asc&client_id=Iv1.b1d9c2b842fa9605&client_secret=c6e8c69ec047bdf7aa5fa70a87bf9fa873f7a463');
      return Promise.resolve({
        json() {
          return {
           'test': true
          };
        }
      });
    });

    const fetchResponse = await fetchCommitsFromGithubForRepo('test', 'test');
    expect(fetchResponse).toEqual({ test: true });
  });

  it('Error Response', async () => {
    window.fetch = jest.fn();
    window.fetch.mockImplementation(() => {
      throw new Error('Testing');
    });
    try {
      const fetchResponse = await fetchCommitsFromGithubForRepo('test', 'test');
      expect(fetchResponse.message).toEqual('Testing');
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error.message).toEqual('Testing');
    }
  });
});
