export const mockCommitData = {
  sha: 'a6a6ac9205414db346a1e77e0ec53bce0c7c914b',
  node_id: 'MDY6Q29tbWl0MjM4NTU0OTMzOmE2YTZhYzkyMDU0MTRkYjM0NmExZTc3ZTBlYzUzYmNlMGM3YzkxNGI=',
  commit: {
    author: {
      name: 'R&D CI',
      email: '',
      date: '2020-07-10T02:27:16Z'
    },
    committer: {
      name: 'R&D CI',
      email: '',
      date: '2020-07-10T02:27:16Z'
    },
    message: '[ci skip] published exscalabur "0.0.15" to cloudsmith',
    tree: {
      sha: 'ffb4700d895033b5bff6d458c221f2e30b814843',
      url: 'https://api.github.com/repos/carta/exscalabur/git/trees/ffb4700d895033b5bff6d458c221f2e30b814843'
    },
    url: 'https://api.github.com/repos/carta/exscalabur/git/commits/a6a6ac9205414db346a1e77e0ec53bce0c7c914b',
    comment_count: 0,
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null
    }
  },
  url: 'https://api.github.com/repos/carta/exscalabur/commits/a6a6ac9205414db346a1e77e0ec53bce0c7c914b',
  html_url: 'https://github.com/carta/exscalabur/commit/a6a6ac9205414db346a1e77e0ec53bce0c7c914b',
  comments_url:
    'https://api.github.com/repos/carta/exscalabur/commits/a6a6ac9205414db346a1e77e0ec53bce0c7c914b/comments',
  author: {},
  committer: {},
  parents: [
    {
      sha: '1fddf7e867ab7f5f1a25f0ec9a18904dea590bf5',
      url: 'https://api.github.com/repos/carta/exscalabur/commits/1fddf7e867ab7f5f1a25f0ec9a18904dea590bf5',
      html_url:
        'https://github.com/carta/exscalabur/commit/1fddf7e867ab7f5f1a25f0ec9a18904dea590bf5'
    }
  ]
};

export const mockUserData = [{
  "login": "react",
  "id": 102812,
  "node_id": "MDEyOk9yZ2FuaXphdGlvbjEwMjgxMg==",
  "avatar_url": "https://avatars.githubusercontent.com/u/102812?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/react",
  "html_url": "https://github.com/react",
  "followers_url": "https://api.github.com/users/react/followers",
  "following_url": "https://api.github.com/users/react/following{/other_user}",
  "gists_url": "https://api.github.com/users/react/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/react/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/react/subscriptions",
  "organizations_url": "https://api.github.com/users/react/orgs",
  "repos_url": "https://api.github.com/users/react/repos",
  "events_url": "https://api.github.com/users/react/events{/privacy}",
  "received_events_url": "https://api.github.com/users/react/received_events",
  "type": "Organization",
  "site_admin": false,
  "score": 1.0
}]

export const searchMockStore = {
  searchTerm: '',
  user: '',
  repo: '',
  currentFilter: 'Last Updated',
  currentKey: 0,
  totalMenu: {
    0: 'Last Updated',
    1: 'Created',
    2: 'Fullname',
    3: 'Pushed'
  },
  currentMenu: {
    1: 'Created',
    2: 'Fullname',
    3: 'Pushed'
  }
};

export const resultsMockStore = {
  error: false,
  success: false,
  loading: false,
  content: true,
  userList: [],
  repoList: [],
  commitList: []
};

export const resultsMockStoreForContainer = {
  error: false,
  success: false,
  loading: false,
  content: true,
  userList: [...mockUserData],
  repoList: [],
  commitList: []
};

export const searchMockStoreForContainer = {
  searchTerm: 'test',
  user: '',
  repo: '',
  currentFilter: 'Last Updated',
  currentKey: 0,
  totalMenu: {
    0: 'Last Updated',
    1: 'Created',
    2: 'Fullname',
    3: 'Pushed'
  },
  currentMenu: {
    1: 'Created',
    2: 'Fullname',
    3: 'Pushed'
  }
};
