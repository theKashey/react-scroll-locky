import * as React from 'react';
import {Component} from 'react';
import Locky from 'react-locky';
import {styleSinglentone} from 'react-style-singleton';
import {GapMode, getGapWidth} from './utils';

const Style = styleSinglentone();

export interface ScrollLockyProps {
  enabled?: boolean;
  gapMode?: GapMode;
  noRelative?: boolean;
  noImportant?: boolean;
}

// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
const getStyles = (allowRelative: boolean, gapMode: GapMode, important: string) => `
  body {
    overflow: hidden ${important};
    ${allowRelative && `position: relative ${important};`}
    ${gapMode == 'margin' && `margin-right: ${getGapWidth(gapMode)}px ${important};`}
    ${gapMode == 'padding' && `padding-right: ${getGapWidth(gapMode)}px ${important};`}
  }
  
  .react-scroll-locky-extender {
    position: absolute;    
    left: 0;    
    right: -${getGapWidth(gapMode)}px;
  }
  
  .react-scroll-locky-extender .react-scroll-locky-extender {
    right: 0;
  }
  
  .react-scroll-locky {
    -webkit-overflow-scrolling: touch;
  }
`;

export class ScrollLocky extends Component<ScrollLockyProps> {
  render() {
    const {enabled = true, children, noRelative, gapMode = 'margin', noImportant} = this.props;
    return (
      <React.Fragment>
        {enabled && <Style styles={getStyles(!noRelative, gapMode, !noImportant ? "!important" : '')}/>}
        <Locky
          enabled={!!enabled}
          className={`react-scroll-locky`}
          leaded
          group="react-scroll-locky"
        >
          {children}
        </Locky>
      </React.Fragment>
    );
  }
}

export const ScrollLockyPane: React.SFC<{
  className?: string;
  style?: React.StyleHTMLAttributes<HTMLDivElement>
}> = ({children, className, style}) => (
  <div className={`react-scroll-locky-extender ${className || ''}`} style={style}>
    {children}
  </div>
);