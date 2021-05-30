export const calculateHighlight = (i, n, l) => {
  const conditions = [];
  const lowest = n - Math.floor(l / 4);
  const highest = n + Math.floor(l / 4);

  if (lowest < 0) {
    const newLow = l - Math.abs(lowest);
    const newCondition = i >= newLow && i <= l - 1;
    const normalCondition = i <= n && i >= 0;
    conditions.push(newCondition);
    conditions.push(normalCondition);
  } else {
    const newCondition = i <= n && i >= lowest;
    conditions.push(newCondition);
  }
  if (highest > l) {
    const newHigh = highest - l;
    const newCondition = i >= 0 && i <= newHigh;
    const normalCondition = i >= n && i <= l - 1;
    conditions.push(newCondition);
    conditions.push(normalCondition);
  } else {
    const newCondition = i >= n && i <= highest;
    conditions.push(newCondition);
  }

  return conditions.some((c) => c);
};

export const defaultShipsList = [
    {
      image: "/images/ship_1.png",
    },
    {
      image: "/images/ship_2.png",
    },
    {
      image: "/images/ship_3.png",
    },
    {
      image: "/images/ship_4.png",
    },
    {
      image: "/images/ship_5.png",
    },
    {
      image: "/images/ship_6.png",
    },
    {
      image: "/images/ship_7.png",
    }
  ];