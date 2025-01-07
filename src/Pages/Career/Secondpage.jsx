
import { useLocation, useParams } from 'react-router-dom';

const SecondPage = () => {
  const location = useLocation();
  const { id } = useParams();  // Get job ID from URL params

  // Get job data from location state, if available
  const job = location.state?.job || null;  // Safely access job

  // Debug: log the job data
  console.log('Job data:', job);
  console.log('Job ID:', id);

  // If job data is missing, show a message
  if (!job) {
    return <div><h2>No job data available. Please return to the previous page.</h2></div>;
  }

  return (
    <div>
      <h2>Job Detail (ID: {id})</h2>
      <p><strong>Title:</strong> {job.title}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Location:</strong> {job.location}</p>
    </div>
  );
};

export default SecondPage;
