import classnames from 'classnames';

const Drawing = ({ stages }) => {
  return (
    <svg id="drawing" width="420" height="520">
      <line className={classnames('stage', { activated: stages >= 11 })} id="man-leg-left" x1="320" x2="260" y1="330" y2="420" stroke="#d4d4d4" strokeWidth="8" />
      <line className={classnames('stage', { activated: stages >= 10 })} id="man-leg-right" x1="320" x2="380" y1="330" y2="420" stroke="#d4d4d4" strokeWidth="8" />
      <line className={classnames('stage', { activated: stages >= 9 })} id="man-arm-right" x1="320" x2="400" y1="220" y2="300" stroke="#d4d4d4" strokeWidth="8" />
      <line className={classnames('stage', { activated: stages >= 8 })} id="man-arm-left" x1="320" x2="240" y1="220" y2="300" stroke="#d4d4d4" strokeWidth="8" />
      <line className={classnames('stage', { activated: stages >= 7 })} id="man-torso" x1="320" x2="320" y1="220" y2="330" stroke="#d4d4d4" strokeWidth="8" />
      <circle className={classnames('stage', { activated: stages >= 6 })} id="man-head" cx="320" cy="180" r="40" stroke="#d4d4d4" strokeWidth="8" fill="transparent" />
      <line className={classnames('stage', { activated: stages >= 5 })} id="rope-1" x1="320" x2="320" y1="80" y2="140" stroke="#d4d4d4" strokeWidth="8" />
      <line className={classnames('stage', { activated: stages >= 4 })} id="rope-2" x1="20" x2="360" y1="80" y2="80" stroke="#d4d4d4" strokeWidth="8" />
      <line className={classnames('stage', { activated: stages >= 3 })} id="rope-3" x1="50" x2="100" y1="150" y2="80" stroke="#d4d4d4" strokeWidth="8" />
      <line className={classnames('stage', { activated: stages >= 2 })} id="rope-4" x1="50" x2="50" y1="80" y2="500" stroke="#d4d4d4" strokeWidth="8" />
      <line className={classnames('stage', { activated: stages >= 1 })} id="rope-5" x1="10" x2="90" y1="500" y2="500" stroke="#d4d4d4" strokeWidth="8" />
    </svg>
  );
};

export default Drawing;
