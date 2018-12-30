import * as React from 'react';
import {Component} from 'react';
import Locky from 'react-locky';
import {styleSinglentone} from 'react-style-singleton';
import {GapMode, getGapWidth, getOffsetTop} from './utils';

const Style = styleSinglentone();

export interface BodyScroll {
  noRelative?: boolean;
  noImportant?: boolean;
  gapMode?: GapMode;
}

export interface ScrollLockyProps extends BodyScroll {
  enabled?: boolean;
  hideBodyScroll?: boolean;
  className?: string,
  headless?: boolean,
  onEscape?: (Event: UIEvent) => void,
}

// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
const getStyles = (allowRelative: boolean, gapMode: GapMode, important: string) => `
  body {
    overflow: hidden ${important};
    ${
  [
    allowRelative && `position: relative ${important};`,
    gapMode == 'margin' && `margin-right: ${getGapWidth(gapMode)}px ${important};`,
    gapMode == 'padding' && `padding-right: ${getGapWidth(gapMode)}px ${important};`,
  ].filter(Boolean).join('')
  }
  }
  
  .react-scroll-locky-extender {
    position: absolute;    
    left: 0;    
    right: -${getGapWidth(gapMode)}px;
  }
  
  .react-scroll-locky-edge-right {
    right: ${getGapWidth(gapMode)}px;
  }
  
  .react-scroll-locky-extender .react-scroll-locky-extender,
  .react-scroll-locky-edge-right. .react-scroll-locky-edge-right {
    right: 0;
  }
  
  .react-scroll-locky {
    -webkit-overflow-scrolling: touch;
  }
`;

export const HideBodyScroll: React.SFC<BodyScroll> = ({noRelative, noImportant, gapMode  = 'margin'}) => (
  <Style styles={getStyles(!noRelative, gapMode, !noImportant ? "!important" : '')}/>
);

export class ScrollLocky extends Component<ScrollLockyProps> {
  componentDidMount() {
    this.check();
  }

  componentDidUpdate() {
    this.check();
  }

  check() {
    if (process.env.NODE_ENV !== 'production') {
      if (!this.props.noRelative && getOffsetTop()) {
        console.error('ScrollLocky expect BODY to have zero margins when noRelative is not set');
      }
    }
  }

  render() {
    const {
      enabled = true,
      hideBodyScroll = true,
      children,
      noRelative,
      gapMode = 'margin',
      noImportant,
      className,
      headless,
      onEscape
    } = this.props;
    return (
      <React.Fragment>
        {enabled && hideBodyScroll && <HideBodyScroll noImportant={noImportant} noRelative={noRelative} gapMode={gapMode} />}
        <Locky
          enabled={!!enabled}
          className={`react-scroll-locky ${className || ''}`.trim()}
          leaded
          group="react-scroll-locky"
          headless={headless}
          onEscape={onEscape}
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