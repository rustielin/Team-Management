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
                    <Text>____________</Text>}
                renderRow={(rowData, sectionID, rowID) =>
                    <Person item={rowData}
                    onPress={() => this.props.onPressItem(rowData, rowID)} />
                }

            />
        )
    }

}

// TOOD: proptypes later and also refactor items / people
// PersonList.propTypes = {
//     people: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         isAdmin: PropTypes.bool.isRequired,
//         text: PropTypes.string.isRequired
//     }).isRequired).isRequired,
//     onPersonClick: PropTypes.func.isRequired
// }


module.exports = PersonList
