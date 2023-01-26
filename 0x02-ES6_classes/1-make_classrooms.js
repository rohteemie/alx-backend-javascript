import ClassRoom from "./0-classroom.js"

export default function initializeRooms() {
  let c1 = new ClassRoom(19);
  let c2 = new ClassRoom(20);
  let c3 = new ClassRoom(34);
  return [c1, c2, c3];
}
