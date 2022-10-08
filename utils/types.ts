export interface IStudent {
  name: string;
  avatar?: string | null;
}

export interface IActivity {
  id: string;
  link: string;
  title: string;
  date: string;
  classname: string;
  classroom: string;
  description: string;
  teachers: string[];
  students: IStudent[];
  photos: string[];
}

export interface IAnnouncement {
  id: string;
  link: string;
  date: string;
  title: string;
  description: string;
  files?: Array<IFile>;
}

export interface IFile {
  name: string;
  url: string;
}
