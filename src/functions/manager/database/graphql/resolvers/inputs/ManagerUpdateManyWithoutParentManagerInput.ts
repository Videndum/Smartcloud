import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateOrConnectWithoutparentManagerInput } from "../inputs/ManagerCreateOrConnectWithoutparentManagerInput";
import { ManagerCreateWithoutParentManagerInput } from "../inputs/ManagerCreateWithoutParentManagerInput";
import { ManagerScalarWhereInput } from "../inputs/ManagerScalarWhereInput";
import { ManagerUpdateManyWithWhereWithoutParentManagerInput } from "../inputs/ManagerUpdateManyWithWhereWithoutParentManagerInput";
import { ManagerUpdateWithWhereUniqueWithoutParentManagerInput } from "../inputs/ManagerUpdateWithWhereUniqueWithoutParentManagerInput";
import { ManagerUpsertWithWhereUniqueWithoutParentManagerInput } from "../inputs/ManagerUpsertWithWhereUniqueWithoutParentManagerInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpdateManyWithoutParentManagerInput {
  @TypeGraphQL.Field(_type => [ManagerCreateWithoutParentManagerInput], {
    nullable: true
  })
  create?: ManagerCreateWithoutParentManagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerCreateOrConnectWithoutparentManagerInput], {
    nullable: true
  })
  connectOrCreate?: ManagerCreateOrConnectWithoutparentManagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerUpsertWithWhereUniqueWithoutParentManagerInput], {
    nullable: true
  })
  upsert?: ManagerUpsertWithWhereUniqueWithoutParentManagerInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ManagerUpdateWithWhereUniqueWithoutParentManagerInput], {
    nullable: true
  })
  update?: ManagerUpdateWithWhereUniqueWithoutParentManagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerUpdateManyWithWhereWithoutParentManagerInput], {
    nullable: true
  })
  updateMany?: ManagerUpdateManyWithWhereWithoutParentManagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ManagerScalarWhereInput[] | undefined;
}
