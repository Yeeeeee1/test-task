import dataset from "./dataset.json";

export async function getData() {
  const results = {
    dataset,
    totalMatches: dataset.length,
  };

  await sleep(1000);

  return results;
}

function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
