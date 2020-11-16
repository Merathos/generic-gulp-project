import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbars = function({ children }) {
  return (
    <Scrollbars
      universal={true}
      autoHide
      renderTrackVertical={props => (
        <div {...props} className="track-vertical" />
      )}
      renderThumbVertical={props => (
        <div {...props} className="thumb-vertical" />
      )}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbars;
