import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateOrConnectWithoutManager_BInput } from "../inputs/ManagerCreateOrConnectWithoutManager_BInput";
import { ManagerCreateWithoutManager_BInput } from "../inputs/ManagerCreateWithoutManager_BInput";
import { ManagerScalarWhereInput } from "../inputs/ManagerScalarWhereInput";
import { ManagerUpdateManyWithWhereWithoutManager_BInput } from "../inputs/ManagerUpdateManyWithWhereWithoutManager_BInput";
import { ManagerUpdateWithWhereUniqueWithoutManager_BInput } from "../inputs/ManagerUpdateWithWhereUniqueWithoutManager_BInput";
import { ManagerUpsertWithWhereUniqueWithoutManager_BInput } from "../inputs/ManagerUpsertWithWhereUniqueWithoutManager_BInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpdateManyWithoutManager_BInput {
  @TypeGraphQL.Field(_type => [ManagerCreateWithoutManager_BInput], {
    nullable: true
  })
  create?: ManagerCreateWithoutManager_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerCreateOrConnectWithoutManager_BInput], {
    nullable: true
  })
  connectOrCreate?: ManagerCreateOrConnectWithoutManager_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerUpsertWithWhereUniqueWithoutManager_BInput], {
    nullable: true
  })
  upsert?: ManagerUpsertWithWhereUniqueWithoutManager_BInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ManagerUpdateWithWhereUniqueWithoutManager_BInput], {
    nullable: true
  })
  update?: ManagerUpdateWithWhereUniqueWithoutManager_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerUpdateManyWithWhereWithoutManager_BInput], {
    nullable: true
  })
  updateMany?: ManagerUpdateManyWithWhereWithoutManager_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ManagerScalarWhereInput[] | undefined;
}
