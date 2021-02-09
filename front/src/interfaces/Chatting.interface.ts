export interface chatting {
  messageId: number;
  message: string;
  time: Date;
  userId: string;
  sender: string;
  chatRoomId: string;
}
export interface sendData {
  chatRoomId:string,
  userId:string,
  receiver:string,
}
