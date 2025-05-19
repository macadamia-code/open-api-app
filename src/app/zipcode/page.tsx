'use client';

import { useState } from 'react';
import { Button, TextField, Typography, Box, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchAddress } from '../../store/zipSlice';

const ZipcodePage = () => {
  const [zipcode, setZipcode] = useState('');
  const dispatch = useAppDispatch();
  const { results, status } = useAppSelector((state) => state.zip as { results: { address1: string; address2: string; address3: string }[]; status: string });

  const handleSearch = () => {
    if (zipcode) {
      dispatch(fetchAddress(zipcode));
    }
  };

  return (
    <Box>
      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="郵便番号"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>検索</Button>
      </Box>

      {status === 'loading' && <CircularProgress />}
      {results.length > 0 && (
        <Box>
          {results.map((addr, i) => (
            <Box key={i} mb={1}>
              {`${addr.address1}${addr.address2}${addr.address3}`}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ZipcodePage;
