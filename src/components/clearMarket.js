// Function to clear luckyNo values at midnight
const clearMarket = () => {
  // Get the current date and time
  const now = new Date();

  // Calculate the time remaining until the next midnight
  const nextMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  const timeUntilMidnight = nextMidnight.getTime() - now.getTime();

  // Function to clear luckyNo values
  const clearmarketList = async () => {
    await Promise.all([
      localStorage.removeItem("openArray"),
      localStorage.removeItem("closeArray"),
      localStorage.removeItem("currentResults"),
      localStorage.removeItem("removalTime"),
    ]);
  };

  // Set a timeout to clear the luckyNo values at the next midnight
  setTimeout(() => {
    clearmarketList();

    // Set an interval to clear the luckyNo values every 24 hours thereafter
    setInterval(clearmarketList, 24 * 60 * 60 * 1000);
  }, timeUntilMidnight);
};

export default clearMarket;
