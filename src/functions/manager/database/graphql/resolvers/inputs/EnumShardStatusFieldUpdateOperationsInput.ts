import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ShardStatus } from "../../enums/ShardStatus";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumShardStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ShardStatus, {
    nullable: true
  })
  set?: "REGISTERED" | "STARTING" | "ONLINE" | "DISCONNECTED" | "EXPIRED" | undefined;
}
