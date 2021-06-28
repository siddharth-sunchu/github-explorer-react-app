export const fetchUserListFromGithub = async (searchText) => {
  try {
    const fetchResponse = await fetch(
      `https://api.github.com/search/users?q=${searchText}&client_id=Iv1.b1d9c2b842fa9605&client_secret=c6e8c69ec047bdf7aa5fa70a87bf9fa873f7a463`
    );
    return fetchResponse.json();
  } catch (error) {
    throw error;
  }
};
