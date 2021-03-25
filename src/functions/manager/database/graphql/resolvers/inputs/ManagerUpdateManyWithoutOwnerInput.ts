import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateOrConnectWithoutownerInput } from "../inputs/ManagerCreateOrConnectWithoutownerInput";
import { ManagerCreateWithoutOwnerInput } from "../inputs/ManagerCreateWithoutOwnerInput";
import { ManagerScalarWhereInput } from "../inputs/ManagerScalarWhereInput";
import { ManagerUpdateManyWithWhereWithoutOwnerInput } from "../inputs/ManagerUpdateManyWithWhereWithoutOwnerInput";
import { ManagerUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/ManagerUpdateWithWhereUniqueWithoutOwnerInput";
import { ManagerUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/ManagerUpsertWithWhereUniqueWithoutOwnerInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [ManagerCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: ManagerCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerCreateOrConnectWithoutownerInput], {
    nullable: true
  })
  connectOrCreate?: ManagerCreateOrConnectWithoutownerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: ManagerUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ManagerUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: ManagerUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: ManagerUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ManagerScalarWhereInput[] | undefined;
}
