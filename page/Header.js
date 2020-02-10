import * as React from 'react';
import {Appbar, Text} from 'react-native-paper';

const ContentTitle = ({ title, style }) => (
  <Appbar.Content
    title={<Text style={style}> {title} </Text>}
    style={{ alignItems: 'center' }}
  />
);

export default class Header extends React.Component {
  _goBack = () => console.log('Went back');

  _handleSearch = () => console.log('Searching');

  _handleMore = () => console.log('Shown more');

  render() {
    return (
        <Appbar.Header>
          <Appbar.BackAction onPress={this._goBack} />
          <ContentTitle title={'Kraft Heinz'} style={{color:'white'}} />
          <Appbar.Action icon="home" onPress={this._handleSearch} />
        </Appbar.Header>
    );
  }
}
