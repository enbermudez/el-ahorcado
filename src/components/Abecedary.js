import classnames from 'classnames';

const Abecedary = ({ letters, searchLetter, gameOver }) => {
  const handleLetterClick = (value, found, used) => {
    if (found || used) return;
    searchLetter(value);
  };

  return (
    <div id="abedecedary" className={classnames({ disabled: gameOver })}>
      {
        !!letters.length && letters.map(({ value, used, found }) => {
          return (
            <div
              onClick={() => handleLetterClick(value, found, used)}
              key={value}
              className={classnames('abc-letter', { disabled: used && !found, found })}
            >
              {value}
            </div>
          )
        })
      }
    </div>
  );
};

export default Abecedary;
