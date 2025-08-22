// Interfaces para los datos del curso
export interface Price {
  amount: number;
  currency: string;
  period?: string;
  features?: string[];
  popular?: boolean;
}

export interface ScheduleItem {
  week: string;
  title: string;
  description: string;
  duration?: string;
  location?: string;
}

export interface CourseData {
  title: string;
  subtitle: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  contents: string[];
  prices: Price[];
  schedule: ScheduleItem[];
  brochureUrl?: string;
  videoUrl?: string;
  images?: string[];
}

// Props para los componentes
export interface CourseHeaderProps {
  title: string;
  subtitle: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface CourseDescriptionProps {
  description: string;
}

export interface CourseContentProps {
  contents: string[];
}

export interface CoursePriceProps {
  prices: Price[];
}

export interface CourseScheduleProps {
  schedule: ScheduleItem[];
}

export interface CourseBrochureProps {
  brochureUrl: string;
}

export interface CourseVideoProps {
  videoUrl: string;
}

export interface CourseGalleryProps {
  images: string[];
}

export interface CourseCTAProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  onEnroll?: () => void;
}
