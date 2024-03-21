const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const selectRandomItem = (array: Array<string>) => {
  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * array.length);

  // Return the item at the randomly generated index
  return array[randomIndex];
};

export { delay, selectRandomItem };
