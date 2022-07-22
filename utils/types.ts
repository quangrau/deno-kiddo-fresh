export interface IStudent {
  name: string;
  avatar?: string | null;
}

export interface IActivity {
  id: string;
  link: string;
  title: string;
  date: string;
  class: string;
  classroom: string;
  description: string;
  teachers: string[];
  students: IStudent[];
  photos: string[];
}

export interface IAnnouncement {
  id: string;
  date: string;
  title: string;
  description: string;
  link: string;
}
