import * as React from 'react';
import {Component} from 'react';
import {AppWrapper} from './styled';
import {ScrollLocky} from "../src";
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
    counter: 0
  };

  componentDidMount() {
    setInterval(() => {
      //this.setState({counter: this.state.counter ? 0 : 1})
    }, 5000);

    setTimeout(() => {
      this.setState({counter: this.state.counter ? 0 : 1})
    }, 1000);
  }

  render() {
    return (
      <AppWrapper>
        <div style={{
          position:'absolute',
          left:0,
          right:0,
          top:0,
          height:50,
          backgroundColor:'#F00'
        }}>floating</div>
        <ScrollLocky gapMode="margin" enabled={!!this.state.counter}>
          <div style={{
            position: 'absolute',
            overflow: 'scroll',
            left:0,
            right:0,
            //width: '100%',
            height: 300,
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}>
            XXX
            XXX
            XXX
            <ScrollLocky enabled={!!this.state.counter}>
              <div style={{
                position: 'absolute',
                overflow: 'scroll',
                width: 200,
                height: 200,
                backgroundColor: 'rgba(0,0,0,0.5)'
              }}>
                XXX
                XXX
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