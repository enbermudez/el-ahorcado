const Words = ({ letters }) => {
  return (
    <div id="word">
      {
        letters.map(({ value, found }, idx) => {
          return (
            <div
              key={idx}
              className="letter"
            >
              { found ? value : '' }
            </div>
          );
        })
      }
    </div>
  );
};

export default Words;
