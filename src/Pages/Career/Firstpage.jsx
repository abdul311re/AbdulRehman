import { Link } from 'react-router-dom';

const FirstPage = () => {
  const jobs = [
    { id: 1, Route: '/second', title: 'Frontend Developer', description: 'React, JavaScript, CSS', location: 'Remote' },
    { id: 2, Route: '/second', title: 'Backend Developer', description: 'Node.js, Express, MongoDB', location: 'On-site' },
    { id: 3, Route: '/second', title: 'Full Stack Developer', description: 'React, Node.js, Docker', location: 'Hybrid' },
  ];

  return (
    <div>
      <h1>Job Postings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Link 
              to={`${job.Route}/${job.id}`}  
              state={{ job: job }}  // Passing job data via state
            >
              {job.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirstPage;
