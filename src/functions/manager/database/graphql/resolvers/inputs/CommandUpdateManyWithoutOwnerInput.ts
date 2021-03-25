import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { CommandCreateOrConnectWithoutownerInput } from "../inputs/CommandCreateOrConnectWithoutownerInput";
import { CommandCreateWithoutOwnerInput } from "../inputs/CommandCreateWithoutOwnerInput";
import { CommandScalarWhereInput } from "../inputs/CommandScalarWhereInput";
import { CommandUpdateManyWithWhereWithoutOwnerInput } from "../inputs/CommandUpdateManyWithWhereWithoutOwnerInput";
import { CommandUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/CommandUpdateWithWhereUniqueWithoutOwnerInput";
import { CommandUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/CommandUpsertWithWhereUniqueWithoutOwnerInput";
import { CommandWhereUniqueInput } from "../inputs/CommandWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommandUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [CommandCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: CommandCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommandCreateOrConnectWithoutownerInput], {
    nullable: true
  })
  connectOrCreate?: CommandCreateOrConnectWithoutownerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommandUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: CommandUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommandWhereUniqueInput], {
    nullable: true
  })
  connect?: CommandWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommandWhereUniqueInput], {
    nullable: true
  })
  set?: CommandWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommandWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommandWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommandWhereUniqueInput], {
    nullable: true
  })
  delete?: CommandWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommandUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: CommandUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommandUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: CommandUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommandScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommandScalarWhereInput[] | undefined;
}
