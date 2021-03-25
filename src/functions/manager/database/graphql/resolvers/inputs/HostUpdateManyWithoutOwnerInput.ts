import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateOrConnectWithoutownerInput } from "../inputs/HostCreateOrConnectWithoutownerInput";
import { HostCreateWithoutOwnerInput } from "../inputs/HostCreateWithoutOwnerInput";
import { HostScalarWhereInput } from "../inputs/HostScalarWhereInput";
import { HostUpdateManyWithWhereWithoutOwnerInput } from "../inputs/HostUpdateManyWithWhereWithoutOwnerInput";
import { HostUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/HostUpdateWithWhereUniqueWithoutOwnerInput";
import { HostUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/HostUpsertWithWhereUniqueWithoutOwnerInput";
import { HostWhereUniqueInput } from "../inputs/HostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [HostCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: HostCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [HostCreateOrConnectWithoutownerInput], {
    nullable: true
  })
  connectOrCreate?: HostCreateOrConnectWithoutownerInput[] | undefined;

  @TypeGraphQL.Field(_type => [HostUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: HostUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [HostWhereUniqueInput], {
    nullable: true
  })
  connect?: HostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HostWhereUniqueInput], {
    nullable: true
  })
  set?: HostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: HostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HostWhereUniqueInput], {
    nullable: true
  })
  delete?: HostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HostUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: HostUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [HostUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: HostUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [HostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: HostScalarWhereInput[] | undefined;
}
