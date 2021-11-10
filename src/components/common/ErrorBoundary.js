import React, { Component } from "react";
import { Typography, Button, Row, Col } from "antd";
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
      return (
        <Row>
          <Col>
            <Title level={1}>Something went wrong</Title>
            <Button onClick={this.props.tryAgain}> Try Again </Button>
          </Col>
        </Row>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
