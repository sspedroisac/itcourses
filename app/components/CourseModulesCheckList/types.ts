export interface CourseModulesCheckListProps {
  slug: string;
  title: string;
  totalClassesCount: number;
  showCourseCard?: boolean;
  modules: {
    title: string;
    slug: string;
    classes: {
      title: string;
      slug: string;
    }[];
  }[];
}
