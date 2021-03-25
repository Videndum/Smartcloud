import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsCreateOrConnectWithoutuserInput } from "../inputs/AdminOnGuildsCreateOrConnectWithoutuserInput";
import { AdminOnGuildsCreateWithoutUserInput } from "../inputs/AdminOnGuildsCreateWithoutUserInput";
import { AdminOnGuildsWhereUniqueInput } from "../inputs/AdminOnGuildsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [AdminOnGuildsCreateWithoutUserInput], {
    nullable: true
  })
  create?: AdminOnGuildsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsCreateOrConnectWithoutuserInput], {
    nullable: true
  })
  connectOrCreate?: AdminOnGuildsCreateOrConnectWithoutuserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsWhereUniqueInput], {
    nullable: true
  })
  connect?: AdminOnGuildsWhereUniqueInput[] | undefined;
}
