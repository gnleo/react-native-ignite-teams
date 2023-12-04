import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { playerGetByGroup } from "./getByGroup";

export async function playerAddOnGroup(newPlayer: PlayerStorageDTO, group: string){

  try {
    const playersOnStorage = await playerGetByGroup(group)

    const playerAlreadyExists = playersOnStorage.filter(player => player.name === newPlayer.name)
    if(playerAlreadyExists.length > 0){
      throw new AppError('Esta pessoa já está adicionada em um time.')
    }

    const storage = JSON.stringify([...playersOnStorage, newPlayer])
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
    
  } catch (error) {
    throw error
  }

}