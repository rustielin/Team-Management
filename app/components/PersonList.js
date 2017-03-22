import React, { PropTypes } from 'react'
import {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    ListView,
    ScrollView
} from 'react-native'

import Person from './Person'
import PersonListHeader from './PersonListHeader'
import styles from '../styles'


class PersonList extends React.Component {

    componentWillMount() {
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
    }

    render() {
        var dataSource = this.dataSource.cloneWithRows(this.props.items);
        return (
            <ListView
                dataSource={dataSource}

                renderHeader={() =>
                <PersonListHeader
                    items={this.props.items}
                    addItem={this.props.onHeaderAdd}/>}

                renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
                    <View key={rowID} style={styles.separator} />}

                renderRow={(rowData, sectionID, rowID) =>
                    <Person
                    key={rowID}
                    item={rowData}
                    onPress={() => this.props.onPressItem(rowData, rowID)} />
                }

            />
        )
    }

}


module.exports = PersonList
