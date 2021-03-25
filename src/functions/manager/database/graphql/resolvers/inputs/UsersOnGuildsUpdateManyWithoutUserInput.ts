import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UsersOnGuildsCreateOrConnectWithoutuserInput } from "../inputs/UsersOnGuildsCreateOrConnectWithoutuserInput";
import { UsersOnGuildsCreateWithoutUserInput } from "../inputs/UsersOnGuildsCreateWithoutUserInput";
import { UsersOnGuildsScalarWhereInput } from "../inputs/UsersOnGuildsScalarWhereInput";
import { UsersOnGuildsUpdateManyWithWhereWithoutUserInput } from "../inputs/UsersOnGuildsUpdateManyWithWhereWithoutUserInput";
import { UsersOnGuildsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UsersOnGuildsUpdateWithWhereUniqueWithoutUserInput";
import { UsersOnGuildsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UsersOnGuildsUpsertWithWhereUniqueWithoutUserInput";
import { UsersOnGuildsWhereUniqueInput } from "../inputs/UsersOnGuildsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UsersOnGuildsCreateWithoutUserInput], {
    nullable: true
  })
  create?: UsersOnGuildsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsCreateOrConnectWithoutuserInput], {
    nullable: true
  })
  connectOrCreate?: UsersOnGuildsCreateOrConnectWithoutuserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UsersOnGuildsUpsertWithWhereUniqueWithoutUserInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UsersOnGuildsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UsersOnGuildsUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UsersOnGuildsUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UsersOnGuildsScalarWhereInput[] | undefined;
}
