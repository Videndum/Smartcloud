import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsCreateOrConnectWithoutguildInput } from "../inputs/AdminOnGuildsCreateOrConnectWithoutguildInput";
import { AdminOnGuildsCreateWithoutGuildInput } from "../inputs/AdminOnGuildsCreateWithoutGuildInput";
import { AdminOnGuildsScalarWhereInput } from "../inputs/AdminOnGuildsScalarWhereInput";
import { AdminOnGuildsUpdateManyWithWhereWithoutGuildInput } from "../inputs/AdminOnGuildsUpdateManyWithWhereWithoutGuildInput";
import { AdminOnGuildsUpdateWithWhereUniqueWithoutGuildInput } from "../inputs/AdminOnGuildsUpdateWithWhereUniqueWithoutGuildInput";
import { AdminOnGuildsUpsertWithWhereUniqueWithoutGuildInput } from "../inputs/AdminOnGuildsUpsertWithWhereUniqueWithoutGuildInput";
import { AdminOnGuildsWhereUniqueInput } from "../inputs/AdminOnGuildsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsUpdateManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [AdminOnGuildsCreateWithoutGuildInput], {
    nullable: true
  })
  create?: AdminOnGuildsCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsCreateOrConnectWithoutguildInput], {
    nullable: true
  })
  connectOrCreate?: AdminOnGuildsCreateOrConnectWithoutguildInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsUpsertWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  upsert?: AdminOnGuildsUpsertWithWhereUniqueWithoutGuildInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [AdminOnGuildsUpdateWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  update?: AdminOnGuildsUpdateWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsUpdateManyWithWhereWithoutGuildInput], {
    nullable: true
  })
  updateMany?: AdminOnGuildsUpdateManyWithWhereWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AdminOnGuildsScalarWhereInput[] | undefined;
}
