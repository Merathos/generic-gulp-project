export const fromSecToDuration = duration => {
  const min = parseInt(duration / 60);
  let sec = parseInt(duration % 60);

  if (sec < 10) {
    sec = '0' + sec;
  }

  return `${min}:${sec}`;
};

export const restOfDuration = duration => {
  const time = duration - 1;
  return time;
};
