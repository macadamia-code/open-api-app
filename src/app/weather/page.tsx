'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchWeather } from '@/store/weatherSlice';
import { Box, Typography, CircularProgress, Card, CardContent, FormControl, InputLabel, Select, MenuItem, ListSubheader, SelectChangeEvent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { cityList } from '@/constants/cityList';
import React from 'react';

const WeatherPage = () => {
  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector((state) => state.weather);
  const [selectedCityId, setSelectedCityId] = useState('400040'); // デフォルト: 久留米

  useEffect(() => {
    dispatch(fetchWeather(selectedCityId));
  }, [dispatch, selectedCityId]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCityId(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth sx={{ maxWidth: 400, mb: 3 }}>
        <InputLabel id="city-select-label">地域を選択</InputLabel>
        <Select
          labelId="city-select-label"
          value={selectedCityId}
          label="地域を選択"
          onChange={handleChange}
        >
          {Object.entries(cityList).map(([pref, cities]) => {
            // <>
            //   <ListSubheader>{pref}</ListSubheader>
            //   {cities.map((city) => (
            //     <MenuItem key={city.id} value={city.id}>
            //       {city.name}
            //     </MenuItem>
            //   ))}
            // </>
            const group = [
              <ListSubheader key={`header-${pref}`}>{pref}</ListSubheader>,
              ...cities.map((city) => (
                <MenuItem key={city.id} value={city.id}>
                  {city.name}
                </MenuItem>
              )),
            ];
            return group;
          })}
        </Select>
      </FormControl>

      {status === 'loading' && <CircularProgress />}
      {status === 'failed' && <Typography color="error">天気情報の取得に失敗しました。</Typography>}
      {data && (
        <>
          <Typography variant="h5">{data.title}</Typography>
          <Typography variant="body1" paragraph>{data.description.text}</Typography>

          <Grid container spacing={2}>
            {data.forecasts.map((f) => (
              // <Grid item xs={12} md={4} key={f.date}>
              <Grid size={{xs: 12, sm: 4}} key={f.date}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{f.dateLabel}（{f.date}）</Typography>
                    <Image
                      src={f.image.url}
                      width={f.image.width}
                      height={f.image.height}
                      alt={f.telop}
                      unoptimized // 外部URLの場合はこのオプションを付けると安全
                    />
                    <Typography>{f.detail.weather}</Typography>
                    <Typography>気温: {f.temperature.min?.celsius ?? '--'}℃ / {f.temperature.max?.celsius ?? '--'}℃</Typography>
                    <Typography>降水確率: {f.chanceOfRain.T00_06} / {f.chanceOfRain.T06_12} / {f.chanceOfRain.T12_18} / {f.chanceOfRain.T18_24}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default WeatherPage;
