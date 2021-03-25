import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ActionCreateOrConnectWithoutownerInput } from "../inputs/ActionCreateOrConnectWithoutownerInput";
import { ActionCreateWithoutOwnerInput } from "../inputs/ActionCreateWithoutOwnerInput";
import { ActionScalarWhereInput } from "../inputs/ActionScalarWhereInput";
import { ActionUpdateManyWithWhereWithoutOwnerInput } from "../inputs/ActionUpdateManyWithWhereWithoutOwnerInput";
import { ActionUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/ActionUpdateWithWhereUniqueWithoutOwnerInput";
import { ActionUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/ActionUpsertWithWhereUniqueWithoutOwnerInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActionUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [ActionCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: ActionCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionCreateOrConnectWithoutownerInput], {
    nullable: true
  })
  connectOrCreate?: ActionCreateOrConnectWithoutownerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: ActionUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereUniqueInput], {
    nullable: true
  })
  connect?: ActionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereUniqueInput], {
    nullable: true
  })
  set?: ActionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ActionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereUniqueInput], {
    nullable: true
  })
  delete?: ActionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: ActionUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: ActionUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ActionScalarWhereInput[] | undefined;
}
