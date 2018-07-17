import * as React from 'react';
import {Component} from 'react';
import Locky from 'react-locky';
import {styleSinglentone} from 'react-style-singleton';
import {getGapWidth} from './utils';

const Style = styleSinglentone();

export interface ScrollLockyProps {
  enabled?: boolean;
}

const getStyles = () => `
  body {
    overflow: hidden !important;
    padding-right: ${getGapWidth()}px !important;
  }
  
  .react-scroll-locky {
    -webkit-overflow-scrolling: touch;
  }
`;

export class ScrollLocky extends Component<ScrollLockyProps> {
  render() {
    const {enabled = true, children} = this.props;
    return (
      <React.Fragment>
        {enabled && <Style styles={getStyles()}/>}
        <Locky enabled={!!enabled} className="react-scroll-locky" group="react-scroll-locky">
          {children}
        </Locky>
      </React.Fragment>
    );
  }
}