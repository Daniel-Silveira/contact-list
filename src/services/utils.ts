export const convertDate = (time: Date | undefined) => {
  if (!time) return;
  const date = new Date(time);
  return date.toLocaleString("pt-br", { dateStyle: "short" });
};
