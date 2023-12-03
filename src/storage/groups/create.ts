import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./getAll";
import { AppError } from "@utils/AppError";

export async function groupsCreate(newGroupName: string){
  try {
    const storageGroups = await groupsGetAll()

    const groupAlreadyExists = storageGroups.includes(newGroupName)
    
    if(groupAlreadyExists){
      throw new AppError('Já existe um grupo cadastrado com esse nome.')
    }

    const storage = JSON.stringify([...storageGroups, newGroupName])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}