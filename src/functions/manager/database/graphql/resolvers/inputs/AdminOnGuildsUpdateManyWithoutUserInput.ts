import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsCreateOrConnectWithoutuserInput } from "../inputs/AdminOnGuildsCreateOrConnectWithoutuserInput";
import { AdminOnGuildsCreateWithoutUserInput } from "../inputs/AdminOnGuildsCreateWithoutUserInput";
import { AdminOnGuildsScalarWhereInput } from "../inputs/AdminOnGuildsScalarWhereInput";
import { AdminOnGuildsUpdateManyWithWhereWithoutUserInput } from "../inputs/AdminOnGuildsUpdateManyWithWhereWithoutUserInput";
import { AdminOnGuildsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/AdminOnGuildsUpdateWithWhereUniqueWithoutUserInput";
import { AdminOnGuildsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/AdminOnGuildsUpsertWithWhereUniqueWithoutUserInput";
import { AdminOnGuildsWhereUniqueInput } from "../inputs/AdminOnGuildsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [AdminOnGuildsCreateWithoutUserInput], {
    nullable: true
  })
  create?: AdminOnGuildsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsCreateOrConnectWithoutuserInput], {
    nullable: true
  })
  connectOrCreate?: AdminOnGuildsCreateOrConnectWithoutuserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: AdminOnGuildsUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsWhereUniqueInput], {
    nullable: true
  })
  connect?: AdminOnGuildsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsWhereUniqueInput], {
    nullable: true
  })
  set?: AdminOnGuildsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AdminOnGuildsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsWhereUniqueInput], {
    nullable: true
  })
  delete?: AdminOnGuildsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: AdminOnGuildsUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: AdminOnGuildsUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AdminOnGuildsScalarWhereInput[] | undefined;
}
