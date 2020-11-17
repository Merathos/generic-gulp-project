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
      renderView={props => <div {...props} className="scroll-view" />}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbars;
