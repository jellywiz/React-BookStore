import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

function Catigoties() {
  const dispatch = useDispatch();
  const Catigories = useSelector((state) => state.categories);
  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button onClick={handleClick} type="submit">
        Check Statues
      </button>
      <p>{Catigories}</p>
    </>
  );
}

export default Catigoties;
