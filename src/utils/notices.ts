export type Notice = {
  id: string;
  title: string;
  details: string;
  date?: string;
  tag?: string;
};

export const NOTICES: Notice[] = [
  { id: 'n1', title: 'Exam Schedule Released', details: 'Mid-semester exams will start from Oct 15. Check the portal for your timetable.', date: '2025-10-01', tag: 'Academics' },
  { id: 'n2', title: 'Library Timing Update', details: 'Library will be open from 8 AM to 10 PM on weekdays.', date: '2025-09-20', tag: 'Facilities' },
  { id: 'n3', title: 'Sports Tryouts', details: 'Football and basketball team selections this weekend. Register by Friday.', date: '2025-09-22', tag: 'Sports' },
  { id: 'n4', title: 'Hostel Maintenance', details: 'Water maintenance in Hostel Block B on Saturday, 2-5 PM.', date: '2025-09-21', tag: 'Hostel' }
];

export function getNoticeById(id: string): Notice | undefined {
  return NOTICES.find(n => n.id === id);
}


