export const formatTime = (inputTime: string): string => {
  const date = new Date(inputTime);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
};
