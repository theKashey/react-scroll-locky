import * as React from 'react';
import {Component} from 'react';
import {AppWrapper} from './styled';
import {ScrollLocky, ScrollLockyPane} from "../src";
import 'babel-polyfill';

export interface AppState {
  counter: number;
}

const fill = (x: number, y: number) => {
  const a: number[] = [];
  for (let i = 0; i < x; ++i) {
    a.push(y)
  }
  return a;
}

export default class App extends Component <{}, AppState> {
  state: AppState = {
    counter: 1
  };

  componentDidMount() {
    setInterval(() => {
      //this.setState({counter: this.state.counter ? 0 : 1})
    }, 1000);

    setTimeout(() => {
      //this.setState({counter: this.state.counter ? 0 : 1})
    }, 1000);
  }

  render() {
    const gapMode = 'margin';
    return (
      <AppWrapper>
        <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 50,
          backgroundColor: '#F00'
        }}>floating
        </div>
        <ScrollLocky gapMode={gapMode} enabled={!!this.state.counter} isolation={false}>
          <ScrollLockyPane>
            <div style={{
              position: 'absolute',
              overflow: 'scroll',
              left: 0,
              right: 0,
              //width: '100%',
              height: 300,
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
              XXX
              XXX
              XXX
              {fill(1000, 1).map(x => <p>{x}****</p>)}
            </div>
          </ScrollLockyPane>
        </ScrollLocky>

        <ScrollLocky gapMode={gapMode} enabled={!!this.state.counter} className="test-test" isolation={false}>
          <div style={{
            position: 'absolute',
            overflow: 'scroll',
            left: 0,
            right: 0,
            top: 200,
            //width: '100%',
            height: 300,
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}>
            XXX
            XXX
            XXX
            <ScrollLocky enabled={!!this.state.counter} isolation={false}>
              <div style={{
                position: 'absolute',
                overflow: 'scroll',
                width: 200,
                height: 200,
                backgroundColor: 'rgba(0,0,0,0.5)'
              }}>
                ZZZ
                ZZZ
                {fill(1000, 1).map(x => <p>{x}****</p>)}
              </div>
            </ScrollLocky>
            {fill(1000, 1).map(x => <p>{x}****</p>)}
          </div>
        </ScrollLocky>
        {fill(1000, 1).map((x, index) => <span>{index}**** </span>)}
      </AppWrapper>
    )
  }
}