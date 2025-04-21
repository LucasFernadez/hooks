import { useState, useEffect } from 'react';

export function useCustomFetch(url) {
  const [data, setData] = useState(null); // donde se guardará la info
  const [loading, setLoading] = useState(true); // para saber si está cargando
  const [error, setError] = useState(null); // para capturar errores

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // empieza la carga
        const response = await fetch(url);
        const json = await response.json();
        setData(json); // guarda los datos
      } catch (err) {
        setError(err); // si hay error, lo guarda
      } finally {
        setLoading(false); // termina la carga
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
