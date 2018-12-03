import React, { Component } from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import cx from 'classnames';
import './Tabs.scss';

const Tab = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class Tabs extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  state = {
    selectedIndex: 0
  };

  selectTab = selectedIndex => this.setState({ selectedIndex });

  render() {
    const { items } = this.props;
    const { selectedIndex } = this.state;

    return (
      <div className="tabs">
        <PoseGroup animateOnMount>
          {items.length &&
            items.map((item, index) => (
              <Tab
                className={cx('tabs-item', {
                  'tabs-item--selected': index === selectedIndex
                })}
                key={item}
                onClick={() => this.selectTab(index)}
              >
                {item}
              </Tab>
            ))}
        </PoseGroup>
      </div>
    );
  }
}

export default Tabs;
