import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ShardCreateOrConnectWithoutHostInput } from "../inputs/ShardCreateOrConnectWithoutHostInput";
import { ShardCreateWithoutHostInput } from "../inputs/ShardCreateWithoutHostInput";
import { ShardScalarWhereInput } from "../inputs/ShardScalarWhereInput";
import { ShardUpdateManyWithWhereWithoutHostInput } from "../inputs/ShardUpdateManyWithWhereWithoutHostInput";
import { ShardUpdateWithWhereUniqueWithoutHostInput } from "../inputs/ShardUpdateWithWhereUniqueWithoutHostInput";
import { ShardUpsertWithWhereUniqueWithoutHostInput } from "../inputs/ShardUpsertWithWhereUniqueWithoutHostInput";
import { ShardWhereUniqueInput } from "../inputs/ShardWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShardUpdateManyWithoutHostInput {
  @TypeGraphQL.Field(_type => [ShardCreateWithoutHostInput], {
    nullable: true
  })
  create?: ShardCreateWithoutHostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardCreateOrConnectWithoutHostInput], {
    nullable: true
  })
  connectOrCreate?: ShardCreateOrConnectWithoutHostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardUpsertWithWhereUniqueWithoutHostInput], {
    nullable: true
  })
  upsert?: ShardUpsertWithWhereUniqueWithoutHostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardWhereUniqueInput], {
    nullable: true
  })
  connect?: ShardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardWhereUniqueInput], {
    nullable: true
  })
  set?: ShardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ShardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardWhereUniqueInput], {
    nullable: true
  })
  delete?: ShardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardUpdateWithWhereUniqueWithoutHostInput], {
    nullable: true
  })
  update?: ShardUpdateWithWhereUniqueWithoutHostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardUpdateManyWithWhereWithoutHostInput], {
    nullable: true
  })
  updateMany?: ShardUpdateManyWithWhereWithoutHostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShardScalarWhereInput[] | undefined;
}
