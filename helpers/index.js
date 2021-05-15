export const fromSecToDuration = (duration) => {
  const min = parseInt(duration / 60, 10);
  let sec = parseInt(duration % 60, 10);

  if (sec < 10) {
    sec = `0${sec}`;
  }

  return `${min}:${sec}`;
};

export const getNewTags = (arr, slug) => {
  if (!arr) {
    return [slug];
  }
  if (arr === slug) {
    return '';
  }
  if (Array.isArray(arr)) {
    if (arr.includes(slug)) {
      return arr.filter((i) => i && i.length > 0 && i !== slug);
    }
    return [...arr, slug].filter((i) => i && i.length > 0);
  }
  if (arr.length > 0) {
    return [arr, slug];
  }
  return '';
};

export const restOfDuration = (duration) => {
  const time = duration - 1;
  return time;
};

export const YEAR_OF_FOUNDATION = 1998;

export const COMPANY_AGE = new Date().getFullYear() - YEAR_OF_FOUNDATION;

export const pluralize = (number, one, two, five) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};
