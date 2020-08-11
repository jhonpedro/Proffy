import React, { useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader'
import AsyncStorage from '@react-native-community/async-storage'

import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'

function Favorites() {

  const [favorites, setFavorites] = useState([])

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(res => {
      if (res) {
        setFavorites(JSON.parse(res))
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  return (
    <View>
      <PageHeader title="Meus Proffys favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Favorites