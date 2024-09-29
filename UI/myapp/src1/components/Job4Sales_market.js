import React, { useState } from 'react';

const Job4Sales_market = () => {
  const jobs = [
    {
      name: 'Product Manager',
      companyName: ' X company',
      location: 'Location - Vijay Nagar',
      experience: 'Exp - 1 Years',
      salary: 'Salary - 1 LPA',
      workMode: 'onsite',
      department: 'IT'
    },
    {
      name: 'Customer Service',
      companyName: ' X company',
      location: 'Location - Jaura Compound',
      experience: 'Exp - 2 Years',
      salary: 'Salary - 2 LPA',
      workMode: 'hybrid',
      department: 'Business and Finance'
    },
    {
      name: 'Content Management',
      companyName: ' X company',
      location: 'Location - Palasiya',
      experience: 'Exp - 3 Years',
      salary: 'Salary - 3 LPA',
      workMode: 'remote',
      department: 'IT'
    },
    {
      name: 'Telemarketing',
      companyName: ' X company',
      location: 'Location - Pithampur',
      experience: 'Exp - 0 Years/ Fresher',
      salary: 'Salary - 1 LPA',
      workMode: 'remote',
      department: 'Engineering'
    },
    {
      name: 'Team Leader',
      companyName: ' X company',
      location: 'Location - Super Corridor',
      experience: 'Exp - 1 Years',
      salary: 'Salary - 2 LPA',
      workMode: 'hybrid',
      department: 'Business and Finance'
    },
    {
      name: 'SEO (Search Engine Optimization)',
      companyName: ' X company',
      location: 'Location - NCS House, Crystal Park',
      experience: 'Exp - 2 Years',
      salary: 'Salary - 3 LPA',
      workMode: 'onsite',
      department: 'Engineering'
    },
    {
      name: 'SEM (Search Engine Marketing)',
      companyName: ' X company',
      location: 'Location - Electronic Complex',
      experience: 'Exp - 3 Years',
      salary: 'Salary - 1 LPA',
      workMode: 'remote',
      department: 'IT'
    },
    {
      name: 'Influencer Marketing',
      companyName: ' X company',
      location: 'Location - Near Radission Hotel',
      experience: 'Exp - 0 Years/ Fresher',
      salary: 'Salary - 2 LPA',
      workMode: 'onsite',
      department: 'Medical'
    },
    {
      name: 'Social Media Advertising',
      companyName: ' X company',
      location: 'Location - Near Radission Hotel',
      experience: 'Exp - 0 Years/ Fresher',
      salary: 'Salary - 3 LPA',
      workMode: 'onsite',
      department: 'Medical'
    }, 
    {
      name: 'Customer Service',
      companyName: ' X company',
      location: 'Location - Near Radission Hotel',
      experience: 'Exp - 1 Years',
      salary: 'Salary - 1 LPA',
      workMode: 'remote',
      department: 'Medical'
    },
    {
      name: 'Content Management',
      companyName: ' X company',
      location: 'Location - Near Radission Hotel',
      experience: 'Exp - 2 Years',
      salary: 'Salary - 2 LPA',
      workMode: 'hybrid',
      department: 'Medical'
    },
    {
      name: 'Product Manager',
      companyName: ' X company',
      location: 'Location - Near Radission Hotel',
      experience: 'Exp - 3 Years',
      salary: 'Salary - 3 LPA',
      workMode: 'hybrid',
      department: 'Medical'
    },

  ];

  const [filters, setFilters] = useState({
    role: '',
    workMode: '', 
    salary: '',
    experience: '',
  });

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const applyFilters = () => {
    const newFilteredJobs = jobs.filter((job) => {
      if (filters.role && !job.name.toLowerCase().includes(filters.role.toLowerCase())) return false;
      if (filters.workMode && job.workMode !== filters.workMode) return false; 
      if (filters.salary && job.salary !== `Salary - ${filters.salary}`) return false;
      if (filters.experience && !job.experience.includes(filters.experience)) return false;
      return true;
    });
    setFilteredJobs(newFilteredJobs);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ flex: '1 1 200px', margin: '5px' }}>
          <input
            placeholder='Enter Role'
            type="text"
            style={{ width: '100%', height: '25px' }}
            name="role"
            value={filters.role}
            onChange={handleFilterChange}
          />
        </div>
        <div style={{ flex: '1 1 200px', margin: '5px' }}>
          <select style={{ width: '100%' }} name="workMode" value={filters.workMode} onChange={handleFilterChange}>
            <option value="">Work Mode</option>
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
   
        <div style={{ flex: '1 1 200px', margin: '5px' }}>
          <select style={{ width: '100%' }} name="salary" value={filters.salary} onChange={handleFilterChange}>
            <option value="">Salary</option>
            <option>1 LPA</option>
            <option>2 LPA</option>
            <option>3 LPA</option>
          </select>
        </div>
        <div style={{ flex: '1 1 200px', margin: '5px' }}>
          <select style={{ width: '100%' }} name="experience" value={filters.experience} onChange={handleFilterChange}>
            <option value="">Experience</option>
            <option>0 Years/ Fresher</option>
            <option>1 Years</option>
            <option>2 Years</option>
            <option>3 Years</option>
          </select>
        </div>
        <div style={{ flex: '1 1 200px', margin: '5px' }}>
          <button onClick={applyFilters} style={{ width: '100%', height: '25px', color: 'white', backgroundColor: 'blue' }}>Submit</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#f9f9f9',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontWeight: 'bold' }}>
                <span>{job.name}</span>
              </div>
            </div>
            <article style={{ marginTop: '10px' }}>
              <p style={{ fontSize: '1em', marginBottom: '10px', textAlign: 'left' }}>{job.companyName}</p>
              <p style={{ fontSize: '1em', marginBottom: '10px', textAlign: 'left' }}>{job.salary} &nbsp;&nbsp;|&nbsp;&nbsp; {job.experience}</p>
              <p style={{ fontSize: '1em', marginBottom: '10px', textAlign: 'left' }}>{job.location}</p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job4Sales_market;
