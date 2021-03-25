import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsCreateOrConnectWithoutguildInput } from "../inputs/AdminOnGuildsCreateOrConnectWithoutguildInput";
import { AdminOnGuildsCreateWithoutGuildInput } from "../inputs/AdminOnGuildsCreateWithoutGuildInput";
import { AdminOnGuildsWhereUniqueInput } from "../inputs/AdminOnGuildsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsCreateNestedManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [AdminOnGuildsCreateWithoutGuildInput], {
    nullable: true
  })
  create?: AdminOnGuildsCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsCreateOrConnectWithoutguildInput], {
    nullable: true
  })
  connectOrCreate?: AdminOnGuildsCreateOrConnectWithoutguildInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsWhereUniqueInput], {
    nullable: true
  })
  connect?: AdminOnGuildsWhereUniqueInput[] | undefined;
}
