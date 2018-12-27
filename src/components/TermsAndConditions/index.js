import React, {Component} from 'react';
import Content from './content';

export default class extends Component  {

  constructor(props){
      super(props)
      this.state = {userReadContent: false};
      this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
   }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    const $TermsAndCondtions = document.querySelector('.terms_and_conditions');
    // TermsAndCondtionsBottomPosition equal the far of the page from dev   plus the dev height
    const TermsAndCondtionsBottomPosition = $TermsAndCondtions.offsetTop + $TermsAndCondtions.clientHeight;
    //windowScrollBottomPostion equal  screen height and the the scrolY height
    const windowScrollBottomPostion = window.scrollY + window.innerHeight;

    if(TermsAndCondtionsBottomPosition <= windowScrollBottomPostion){
      this.setState({userReadContent: true});
    }
  }

  render(){
    const {userReadContent} = this.state;
    return(
      <div>
        <Content />
        <div className="button">
            <button disabled={!userReadContent}>OK</button>
        </div>
      </div>
    );
  }
}
