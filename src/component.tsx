import * as React from 'react';
import {Component} from 'react';
import Locky from 'react-locky';
import {styleSinglentone} from 'react-style-singleton';
import {GapMode, getGapWidth} from './utils';

const Style = styleSinglentone();

export interface ScrollLockyProps {
  enabled?: boolean;
  gapMode: GapMode;
  noRelative?: boolean;
}

const getStyles = (allowRelative: boolean, gapMode: GapMode) => `
  body {
    overflow: hidden !important;
    ${allowRelative && `position: relative !important;`}
    ${gapMode == 'margin' && `margin-right: ${getGapWidth(gapMode)}px !important;`}
    ${gapMode == 'padding' && `padding-right: ${getGapWidth(gapMode)}px !important;`}
  }
  
  .react-scroll-locky {
    -webkit-overflow-scrolling: touch;
  }
`;

export class ScrollLocky extends Component<ScrollLockyProps> {
  render() {
    const {enabled = true, children, noRelative, gapMode = 'padding'} = this.props;
    return (
      <React.Fragment>
        {enabled && <Style styles={getStyles(!noRelative, gapMode)}/>}
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