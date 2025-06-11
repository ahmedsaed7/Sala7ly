export const fetchServices = async () => {
    const res = await fetch('/api/services');
    return res.json();
  };