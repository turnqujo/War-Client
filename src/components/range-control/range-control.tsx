import React from 'react';
import { Range } from '../../models/range';
import RangeInput from '../range-input/range-input';
import './range-control.css';

interface Props {
  domain: Range;
  initial: Range;
  onChange: (newRange: Range) => void;
}

interface State {
  start: number;
  end: number;
  isPristine: boolean;
  hasError: boolean;
}

class RangeControl extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { ...props.initial, isPristine: true, hasError: false };
  }

  public render(): React.ReactNode {
    return (
      <div className="range-control">
        <h3 className="range-control__header">Viewing Turns</h3>
        <div className="range-control__input-container">
          <RangeInput
            initialValue={this.state.start}
            maxValue={this.props.domain.end}
            onChange={this.handleStartChange}
            onError={this.reportError}
          />
          <span className="range-control__separator">through</span>
          <RangeInput
            initialValue={this.state.end}
            maxValue={this.props.domain.end}
            onChange={this.handleEndChange}
            onError={this.reportError}
          />
        </div>
        <button
          type="button"
          className="range-control__submit"
          onClick={this.submit}
          disabled={this.state.isPristine || this.state.hasError}
        >
          Apply
        </button>
      </div>
    );
  }

  private readonly handleStartChange = (start: number) => {
    if (+start > +this.state.end) {
      this.reportError('Start cannot be larger than end.');
      return;
    }

    this.setState({ start, isPristine: false, hasError: false });
  };

  private readonly handleEndChange = (end: number) => {
    if (+this.state.start > +end) {
      this.reportError('Start cannot be larger than end.');
      return;
    }

    this.setState({ end, isPristine: false, hasError: false });
  };

  private readonly reportError = (error: string) => {
    console.error(error);
    this.setState({ hasError: true });
  };

  private readonly submit = () => {
    const { start, end } = this.state;
    if (+start > +end) {
      this.reportError('Start cannot be larger than end.');
      return;
    }

    this.props.onChange({ start, end });
    this.setState({ isPristine: true });
  };
}

export default RangeControl;
