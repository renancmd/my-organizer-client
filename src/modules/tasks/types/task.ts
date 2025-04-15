// Exportando cada interface individualmente
export interface ContainerToDoProps {
  children: React.ReactNode;
}

export interface TabButtonProps {
  title: string;
  onclick?: () => void;
}

export interface TaskProps {
  id: string;
  name: string;
  description?: string;
  date: string;
  done: boolean;
  onclick: () => void;
  oncomplete?: (e: any) => void;
  ondelete?: (e: any) => void;
}

export interface ModalTaskProps {
  id: string;
  title: string;
  description?: string;
  date?: string;
  onclick?: () => void;
}

export interface DatepickerProps {
  date?: string;
  onchange?: (e: any) => void;
  onTodayClick?: () => void;
  onTomorrowClick?: () => void;
}
