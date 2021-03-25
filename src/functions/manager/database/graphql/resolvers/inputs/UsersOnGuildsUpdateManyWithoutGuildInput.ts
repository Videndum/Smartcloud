import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UsersOnGuildsCreateOrConnectWithoutguildInput } from "../inputs/UsersOnGuildsCreateOrConnectWithoutguildInput";
import { UsersOnGuildsCreateWithoutGuildInput } from "../inputs/UsersOnGuildsCreateWithoutGuildInput";
import { UsersOnGuildsScalarWhereInput } from "../inputs/UsersOnGuildsScalarWhereInput";
import { UsersOnGuildsUpdateManyWithWhereWithoutGuildInput } from "../inputs/UsersOnGuildsUpdateManyWithWhereWithoutGuildInput";
import { UsersOnGuildsUpdateWithWhereUniqueWithoutGuildInput } from "../inputs/UsersOnGuildsUpdateWithWhereUniqueWithoutGuildInput";
import { UsersOnGuildsUpsertWithWhereUniqueWithoutGuildInput } from "../inputs/UsersOnGuildsUpsertWithWhereUniqueWithoutGuildInput";
import { UsersOnGuildsWhereUniqueInput } from "../inputs/UsersOnGuildsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsUpdateManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [UsersOnGuildsCreateWithoutGuildInput], {
    nullable: true
  })
  create?: UsersOnGuildsCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsCreateOrConnectWithoutguildInput], {
    nullable: true
  })
  connectOrCreate?: UsersOnGuildsCreateOrConnectWithoutguildInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsUpsertWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  upsert?: UsersOnGuildsUpsertWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsWhereUniqueInput], {
    nullable: true
  })
  connect?: UsersOnGuildsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsWhereUniqueInput], {
    nullable: true
  })
  set?: UsersOnGuildsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UsersOnGuildsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsWhereUniqueInput], {
    nullable: true
  })
  delete?: UsersOnGuildsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsUpdateWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  update?: UsersOnGuildsUpdateWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsUpdateManyWithWhereWithoutGuildInput], {
    nullable: true
  })
  updateMany?: UsersOnGuildsUpdateManyWithWhereWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UsersOnGuildsScalarWhereInput[] | undefined;
}
