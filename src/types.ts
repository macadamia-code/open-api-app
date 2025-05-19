export interface Weather {
  title: string;
  description: { text: string };
  forecasts: {
    date: string;
    dateLabel: string;
    image: { url: string; width: number; height: number };
    telop: string;
    detail: { weather: string };
    temperature: { min?: { celsius: string }; max?: { celsius: string } };
    chanceOfRain: { T00_06: string; T06_12: string; T12_18: string; T18_24: string };
  }[];
}

