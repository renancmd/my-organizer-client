// export { ContainerToDoProps };

interface ContainerToDoProps {
  children: React.ReactNode;
}

interface TabButtonProps {
  title: string;
}

interface TaskProps {
  name: string;
  description?: string;
  date: string;
  done: boolean;
  onclick: () => void;
}

interface ModalTaskProps {
  title: string;
  description?: string;
  date?: string;
  onclick?: () => void;
}

interface DatepickerProps {
  date?: string;
}
