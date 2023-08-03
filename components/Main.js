import CreateForm from '@/components/CreateForm';
import ReportTable from '@/components/ReportTable';
import { useState } from 'react';

export default function Main() {
  const [cookieStands, setCookieStands] = useState([]); // State to store the list of cookie stands

  const handleLocationCreate = (newLocation) => {
    setCookieStands([...cookieStands, newLocation]); // Add the new location to the list of cookie stands
  };

  return (
    <div className="main">
      <CreateForm onLocationCreate={handleLocationCreate} className="grid grid-cols-1 gap-4 sm:grid-cols-5" />
      {cookieStands.length > 0 ? (
        <ReportTable cookieStands={cookieStands} />
      ) : (
        <p className='flex items-center justify-center py-20 align-middle'>No Cookie Stands Available</p>
      )}
    </div>
  );
}
