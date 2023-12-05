import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playerGetByGroup } from "./getByGroup";

export async function playerRemoveByGroup(playerName: string, group: string) {

  try {
    const playersOnStorage = await playerGetByGroup(group)

    const filteredPlayers = playersOnStorage.filter(player => player.name !== playerName)
    const players = JSON.stringify(filteredPlayers)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
  } catch (error) {
    throw error
  }
} 