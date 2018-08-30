import React from 'react';
import Fade from '@material-ui/core/Fade';
import { DropdownList } from './'

class HoverDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        showList: false
    }

    this.headerRef = React.createRef();
  }

  handleHover = (event) => {
    this.setState({ showList: true });
  };

  handleLeave = (event) => {
    this.setState({ showList: false });
  };

  render() {
    const { header, list } = this.props;
    const { showList } = this.state;

    return (
      <div onMouseLeave={this.handleLeave} ref={this.headerRef} >
        <div onMouseEnter={this.handleHover}>
          { header }
        </div>
        <Fade in={showList} unmountOnExit>
          <DropdownList list={list} headerRef={this.headerRef} />
        </Fade>
      </div>
    )
  }
}

export default HoverDropdown
