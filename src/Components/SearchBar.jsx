import React, { useState, useEffect } from 'react';
import Certificate from './Certificate';
import Loader from './Loader';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCertificates = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('https://deuniversity-d31be-default-rtdb.firebaseio.com/certificate.json');
        if (response.ok) {
          const data = await response.json();
          const foundCertificate = Object.values(data).find((item) => item.certId === search);
          setCertificate(foundCertificate);
        } else {
          console.log('Failed to fetch certificate data from the Firebase Realtime Database.');
        }
      } catch (error) {
        console.log('Error:', error);
      }

      setIsLoading(false);
    };

    if (search) {
      fetchCertificates();
    }
  }, [search]);

  const doSearch = () => {
    // Trigger the useEffect hook to fetch certificates when the search query changes
    setSearch(search.trim());
  };

  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <input
          className='md:w-[500px] w-[300px] p-4 rounded-full text-white'
          type="text"
          name='candidate_name'
          placeholder='Enter The Hash'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {!isLoading ? (
          <button
            onClick={doSearch}
            className='bg-blue-500 hover:bg-blue-700 text-white text-xl py-2 px-5 rounded-full'
          >
            Search Now
          </button>
        ) : (
          <Loader />
        )}
      </div>
      {certificate && <Certificate props={{ certificate }} />}
    </>
  );
};

export default SearchBar;
