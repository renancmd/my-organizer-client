// export { ContainerToDoProps };

interface ContainerToDoProps {
  children: React.ReactNode;
}

interface TabButtonProps {
  title: string;
  onclick?: () => void;
}

interface TaskProps {
  id: string;
  name: string;
  description?: string;
  date: string;
  done: boolean;
  onclick: () => void;
  oncomplete?: (e: any) => void;
  ondelete?: (e: any) => void;
}

interface ModalTaskProps {
  id: string;
  title: string;
  description?: string;
  date?: string;
  onclick?: () => void;
}

interface DatepickerProps {
  date?: string;
  onchange?: (e: any) => void;
  onTodayClick?: () => void;
  onTomorrowClick?: () => void;
}
