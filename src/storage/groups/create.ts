import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./getAll";

export async function groupsCreate(newGroupName: string){
  try {
    const storageGroups = await groupsGetAll()
    const storage = JSON.stringify([...storageGroups, newGroupName])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}