import React, { Component } from 'react';

class Price extends Component {

    constructor(props){
      super(props);
      this.state = {value: 1};
      this.increase = this.increase.bind(this);
    }

    componentWillMount(){ // will launch before rendering
      console.log(`Will mount`);
    }

    componentDidMount(){ //will launch immediately after rendering
      console.log(`Did mount`);
      setTimeout(this.increase, 3000);
    }

    increase(){
      this.setState(prevState => ({value: ++prevState.value}));
    }

    render () {
      return <h1>Price component with value: {this.state.value}</h1>;
    }

}

export default Price;
