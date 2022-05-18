const tasks = () => [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Jan 26th at 10.00am',
    reminder: true,
  },
  {
    id: 2,
    text: 'Go to the Mall',
    day: 'Jan 20th at 8.00am',
    reminder: false,
  },
  {
    id: 3,
    text: 'School programme',
    day: 'Jan 24th at 9.00am',
    reminder: true,
  },
  {
    id: 4,
    text: 'Go to the Gym',
    day: '21st at 6.00am',
    reminder: true,
  },
];

const Tasks = () => (
  <>
    {tasks.map((task) => (
      <h3 key={task.id}>{task.text}</h3>
    ))}
  </>
);

export default Tasks;
