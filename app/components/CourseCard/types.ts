export type CourseCardProps = {
  title: string;
  modulesCount: number;
  progress?: number;
  progressColor?: string;
  icon?: React.ReactNode;
  iconColor?: string;
  iconBgColor?: string;
  slug?: string;
};
