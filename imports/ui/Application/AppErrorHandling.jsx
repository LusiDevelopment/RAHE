/* 
 *  Author: Annick K
 *  Created on: 2018-10-26
 *  Component: App errors handling
 * 
 *  Description: Display and describes Application errors
 * 
 *  Changes and updates: 
 * 
*/

import {React,Component}  from "react";

export default class AppErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
      logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }