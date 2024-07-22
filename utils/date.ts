export const formatDateString = (dateString: string) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "short",
  };
  //@ts-expect-error typescript bug not inferring options type correctly
  return date.toLocaleString("en-US", options)
}