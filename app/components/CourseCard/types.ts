export type CourseCardProps = {
  title: string;
  modulesCount: number;
  progress: number;
  isFavorite?: boolean;
  progressColor?: string;
  icon?: React.ReactNode;
  iconColor?: string;
  iconBgColor?: string;
};
