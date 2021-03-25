import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UsersOnGuildsCreateOrConnectWithoutuserInput } from "../inputs/UsersOnGuildsCreateOrConnectWithoutuserInput";
import { UsersOnGuildsCreateWithoutUserInput } from "../inputs/UsersOnGuildsCreateWithoutUserInput";
import { UsersOnGuildsWhereUniqueInput } from "../inputs/UsersOnGuildsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UsersOnGuildsCreateWithoutUserInput], {
    nullable: true
  })
  create?: UsersOnGuildsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsCreateOrConnectWithoutuserInput], {
    nullable: true
  })
  connectOrCreate?: UsersOnGuildsCreateOrConnectWithoutuserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsWhereUniqueInput], {
    nullable: true
  })
  connect?: UsersOnGuildsWhereUniqueInput[] | undefined;
}
