import React from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

export default class Activity extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  {this.props.text}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
