import React, { PureComponent } from 'react';
// import '../../sass/Accordion.scss';

class Accordion extends PureComponent {
  /**
   * [constructor constructor of accordion component]
   * @param  {[type]} props [description]
   * @return {[type]}       [description]
   */
  constructor(props) {
    super(props);

    this.state = {
      open: props.isopen
    };
  }

  /**
   * [toggleAccordion toggle open/close accordion]
   * @param  {[type]} open [description]
   * @return {[type]}      [description]
   */
  toggleAccordion(open) {
    this.setState({
      open
    });
  }

  /**
   * [render render function of accordion]
   * @return {[type]} [description]
   */
  render() {
    let { children, heading, notCollapsable } = this.props,
      { open } = this.state,
      articleClassName= open?'accrd-content':'accrd-content fold-height';
    return ( 
      <li className="accordion">
        
        <h4 onClick={() => {
          if(!notCollapsable) {
            this.toggleAccordion(!open);
          }
          }}>{heading}
        {!notCollapsable && (open?<i>+</i>:<i>-</i>)}
        </h4>
        <article className={articleClassName}>{children}</article>
      </li>
    );
  }
}

export default Accordion;