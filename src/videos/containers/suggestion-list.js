import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../components/suggestions-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';

class SuggestionList extends Component {
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />;
  itemSeparator = () => <Separator />; // color='red' 

  render() {
    const list = [
      {
        key: '1',
        title: 'Avengers',
      },
      {
        key: '2',
        title: 'Pokemon',
      },
    ];

    return (
      <Layout title="Recomendado para ti">
        <FlatList
          data={list}
          // ListEmptyComponent = { () => <Text>No hay elementos en la lista</Text> }
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({item}) => <Text> {item.title} </Text>}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
