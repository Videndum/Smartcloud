import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateOrConnectWithoutManager_AInput } from "../inputs/ManagerCreateOrConnectWithoutManager_AInput";
import { ManagerCreateWithoutManager_AInput } from "../inputs/ManagerCreateWithoutManager_AInput";
import { ManagerScalarWhereInput } from "../inputs/ManagerScalarWhereInput";
import { ManagerUpdateManyWithWhereWithoutManager_AInput } from "../inputs/ManagerUpdateManyWithWhereWithoutManager_AInput";
import { ManagerUpdateWithWhereUniqueWithoutManager_AInput } from "../inputs/ManagerUpdateWithWhereUniqueWithoutManager_AInput";
import { ManagerUpsertWithWhereUniqueWithoutManager_AInput } from "../inputs/ManagerUpsertWithWhereUniqueWithoutManager_AInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpdateManyWithoutManager_AInput {
  @TypeGraphQL.Field(_type => [ManagerCreateWithoutManager_AInput], {
    nullable: true
  })
  create?: ManagerCreateWithoutManager_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerCreateOrConnectWithoutManager_AInput], {
    nullable: true
  })
  connectOrCreate?: ManagerCreateOrConnectWithoutManager_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerUpsertWithWhereUniqueWithoutManager_AInput], {
    nullable: true
  })
  upsert?: ManagerUpsertWithWhereUniqueWithoutManager_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerWhereUniqueInput], {
    nullable: true
  })
  connect?: ManagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerWhereUniqueInput], {
    nullable: true
  })
  set?: ManagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ManagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerWhereUniqueInput], {
    nullable: true
  })
  delete?: ManagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerUpdateWithWhereUniqueWithoutManager_AInput], {
    nullable: true
  })
  update?: ManagerUpdateWithWhereUniqueWithoutManager_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerUpdateManyWithWhereWithoutManager_AInput], {
    nullable: true
  })
  updateMany?: ManagerUpdateManyWithWhereWithoutManager_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ManagerScalarWhereInput[] | undefined;
}
