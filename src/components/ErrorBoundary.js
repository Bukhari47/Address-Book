import React, { Component } from "react";
import { Typography } from "antd";

const { Title } = Typography;

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <Title level={1}>Something went wrong</Title>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
