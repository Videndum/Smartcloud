import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UsersOnGuildsCreateOrConnectWithoutguildInput } from "../inputs/UsersOnGuildsCreateOrConnectWithoutguildInput";
import { UsersOnGuildsCreateWithoutGuildInput } from "../inputs/UsersOnGuildsCreateWithoutGuildInput";
import { UsersOnGuildsWhereUniqueInput } from "../inputs/UsersOnGuildsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsCreateNestedManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [UsersOnGuildsCreateWithoutGuildInput], {
    nullable: true
  })
  create?: UsersOnGuildsCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsCreateOrConnectWithoutguildInput], {
    nullable: true
  })
  connectOrCreate?: UsersOnGuildsCreateOrConnectWithoutguildInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsWhereUniqueInput], {
    nullable: true
  })
  connect?: UsersOnGuildsWhereUniqueInput[] | undefined;
}
