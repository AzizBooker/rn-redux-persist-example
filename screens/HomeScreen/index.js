import React, { Component } from 'react'
import { Text, View,FlatList,ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './style'

const HomeScreen= () => {
    const data=useSelector((state)=>state.list.items)
    console.log(data)

    const renderItems=({item})=>{
        console.log(item)
        return(
            <View>
                <Text style={styles.text}>{item}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderItems}/>
        </View>
    )
}

export default HomeScreen

