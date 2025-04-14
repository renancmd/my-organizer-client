function formatDate(date: Date) {
    return date.toISOString().split("T")[0];
  }
  
  function currentDate() {
    return formatDate(new Date());
  }
  
  function tomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return formatDate(tomorrow);
  }

  export { currentDate, tomorrowDate };