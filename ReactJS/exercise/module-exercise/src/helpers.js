const choice = (items) => {
  const idx = Math.floor(Math.random() * items.length);
  const choice = items[idx];
  return choice;
};

const remove = (items, item) => {
  let idx = items.indexOf(item);
  if (idx !== -1) {
    return items.splice(idx, 1);
  }
  return undefined;
};

// eslint-disable-next-line
export { choice, remove };
