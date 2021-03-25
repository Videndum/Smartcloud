import * as TypeGraphQL from "type-graphql";

export enum ManagerScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  ownerId = "ownerId",
  ip = "ip",
  url = "url",
  port = "port",
  type = "type",
  restartSchedule = "restartSchedule",
  downtimeHistory = "downtimeHistory",
  tasksCompleted = "tasksCompleted",
  parentID = "parentID"
}
TypeGraphQL.registerEnumType(ManagerScalarFieldEnum, {
  name: "ManagerScalarFieldEnum",
  description: undefined,
});
