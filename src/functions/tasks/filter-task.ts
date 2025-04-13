export const filterTasks = (tasks: any[], filter: string) => {
    const today = normalizeDate(new Date());
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
  
    return tasks.filter((task) => {
      const taskDate = task.date ? parseLocalDate(task.date) : null;
  
      switch (filter) {
        case "no-date":
          return !taskDate;
        case "today":
          return taskDate?.getTime() === today.getTime();
        case "tomorrow":
          return taskDate?.getTime() === tomorrow.getTime();
        case "overdue":
          return taskDate && taskDate < today && !task.done;
        case "completed":
          return task.done;
        default:
          return true;
      }
    });
  };
  
  function normalizeDate(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
  
  function parseLocalDate(dateStr: string): Date {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  }
  