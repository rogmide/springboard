export const itemInCart = (amtItem) => {
  let total = 0;
  Object.keys(amtItem).map((id) => {
    total += amtItem[id];
  });
  return total;
};

export const calculateTotalPrice = (prod, items) => {
  let total = 0;
  Object.keys(items).map((id) => {
    total += prod[id].price * items[id];
  });
  return total;
};
