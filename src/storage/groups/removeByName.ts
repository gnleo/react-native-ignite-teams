import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./getAll";

export async function groupsRemoveByName(groupNameForDelete: string){
  try {
    const groupsOnStorage = await groupsGetAll()
    const groups = groupsOnStorage.filter(group => group !== groupNameForDelete)

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupNameForDelete}`)
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
  } catch (error) {
    throw error
  }

}