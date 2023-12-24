interface PerfEntry {
  name: string;
  delta: number;
  value: number;
}

type OnPerfEntry = (entry: PerfEntry) => void;

export default function reportWebVitals  (onPerfEntry: OnPerfEntry): void  {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};