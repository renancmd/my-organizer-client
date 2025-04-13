export const filterTasks = (tasks: any[], filter: string) => {
    const today = normalizeDate(new Date());
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
  
    return tasks.filter((task) => {
      const taskDate = task.date ? parseLocalDate(task.date) : null;
  
      switch (filter) {
        case "no-date":
          return !taskDate && !task.done;
        case "today":
          return taskDate?.getTime() === today.getTime() && !task.done;
        case "tomorrow":
          return taskDate?.getTime() === tomorrow.getTime() && !task.done;
        case "overdue":
          return taskDate && taskDate < today && !task.done;
        case "completed":
          return task.done;
        default:
          return !task.done;
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
  