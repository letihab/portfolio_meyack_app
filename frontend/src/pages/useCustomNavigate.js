// useCustomNavigate.js
import { useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const customNavigate = (path) => {
    // Logique de navigation personnalisée ici
    navigate(path);
  };

  return customNavigate;
};

export default useCustomNavigate;
