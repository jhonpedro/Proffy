import React, { useState } from 'react'
import { View, Text, Image, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import api from '../../services/api'

export interface Teacher {
  id: number
  name: string
  avatar: string
  whatsapp: string
  bio: string
  subject: string
  cost: number
}

interface TeacherItemProps {
  teacher: Teacher,
  favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited)

  async function handleLinkToWhatsapp(number: string) {
    await api.post('/connections', {
      user_id: teacher.id
    })
    Linking.openURL(`whatsapp://send?phone=${number}`)
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites')

    let newFavorites = []

    if (favorites) {
      newFavorites = JSON.parse(favorites)
    }

    if (isFavorited) {
      const favoriteIndex = newFavorites.findIndex((teacherItem: Teacher) => teacherItem.id === teacher.id)

      newFavorites.splice(favoriteIndex, 1)
      setIsFavorited(false)
    } else {
      newFavorites.push(teacher)

      setIsFavorited(true)
    }
    AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio} </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost} </Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[
              styles.favoriteButton,
              isFavorited ? styles.favorited : null
            ]}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
                <Image source={heartOutLineIcon} />
              )}
          </RectButton>

          <RectButton
            style={styles.contactButton}
            onPress={() => handleLinkToWhatsapp(teacher.whatsapp)}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem