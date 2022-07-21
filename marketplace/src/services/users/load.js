import mockUsersData from "./mock-users-data.json";

const pageSize = 10;

export async function getUsers(options) {
  const pageIndex = options.pageIndex || 0;
  const start = pageIndex * pageSize;
  let users = [];

  users = mockUsersData;

  const results = {
    users,
    pageIndex,
    totalMatches: mockUsersData.length,
  };

  await sleep(1000);

  return results;
}

function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
