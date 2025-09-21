export type Notice = {
  id: string;
  title: string;
  details: string;
  date?: string;
  tag?: string;
};

export const NOTICES: Notice[] = [
  { id: 'n1', title: 'Exam Schedule Released', details: 'Mid-semester exams will start from Oct 15. Check the portal for your timetable.', date: new Date().toISOString().split('T')[0], tag: 'Academics' },
  { id: 'n2', title: 'Library Timing Update', details: 'Library will be open from 8 AM to 10 PM on weekdays.', date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], tag: 'Facilities' },
  { id: 'n3', title: 'Sports Tryouts', details: 'Football and basketball team selections this weekend. Register by Friday.', date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], tag: 'Sports' },
  { id: 'n4', title: 'Hostel Maintenance', details: 'Water maintenance in Hostel Block B on Saturday, 2-5 PM.', date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], tag: 'Hostel' }
];

export function getNoticeById(id: string): Notice | undefined {
  return NOTICES.find(n => n.id === id);
}


