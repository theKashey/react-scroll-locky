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
  isolation?: boolean;
}

// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
const getStyles = (gap: number, allowRelative: boolean, gapMode: GapMode = 'margin', important: string) => `
  body {
    overflow: hidden ${important};
    ${
  [
    allowRelative && `position: relative ${important};`,
    gapMode == 'margin' && `margin-right: ${gap}px ${important};`,
    gapMode == 'padding' && `padding-right: ${gap}px ${important};`,
  ].filter(Boolean).join('')
  }
  }
  
  .react-scroll-locky-extender {
    position: absolute;    
    left: 0;    
    right: -${gap}px;
  }
  
  .react-scroll-locky-edge-right {
    right: ${gap}px;
  }
  
  .react-scroll-locky-extender .react-scroll-locky-extender,
  .react-scroll-locky-edge-right. .react-scroll-locky-edge-right {
    right: 0;
  }
  
  .react-scroll-locky {
    -webkit-overflow-scrolling: touch;
  }
`;

export class HideBodyScroll extends React.Component<BodyScroll, { gap: number }> {
  state = {
    gap: getGapWidth(this.props.gapMode)
  };

  componentDidMount() {
    const gap = getGapWidth(this.props.gapMode);
    if (gap !== this.state.gap) {
      this.setState({
        gap
      })
    }
  }

  render() {
    const {noRelative, noImportant, gapMode} = this.props;
    const {gap} = this.state

    return gap
      ? <Style styles={getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : '')}/>
      : null;
  }
}

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
      onEscape,
      isolation = true,
    } = this.props;

    const lockProps = isolation
      ? {}
      : {
        noDefault: true,
        events: {
          scroll: true,
          wheel: true,
          touchmove: true,
          touchstart: 'report-only',
          click: "report-only",
        } as any
      };

    return (
      <React.Fragment>
        {enabled && hideBodyScroll &&
        <HideBodyScroll noImportant={noImportant} noRelative={noRelative} gapMode={gapMode}/>}
        <Locky
          enabled={!!enabled}
          className={`react-scroll-locky ${className || ''}`.trim()}
          leaded
          group="react-scroll-locky"
          headless={headless}
          onEscape={onEscape}
          {...lockProps}
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