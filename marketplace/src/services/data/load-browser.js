export async function getData(options) {
  const res = await fetch(
    "/services/users?pageIndex=" + (options.pageIndex || 0)
  );
  return await res.json();
}
