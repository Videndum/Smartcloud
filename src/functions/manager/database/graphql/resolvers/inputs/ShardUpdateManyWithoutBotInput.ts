import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ShardCreateOrConnectWithoutbotInput } from "../inputs/ShardCreateOrConnectWithoutbotInput";
import { ShardCreateWithoutBotInput } from "../inputs/ShardCreateWithoutBotInput";
import { ShardScalarWhereInput } from "../inputs/ShardScalarWhereInput";
import { ShardUpdateManyWithWhereWithoutBotInput } from "../inputs/ShardUpdateManyWithWhereWithoutBotInput";
import { ShardUpdateWithWhereUniqueWithoutBotInput } from "../inputs/ShardUpdateWithWhereUniqueWithoutBotInput";
import { ShardUpsertWithWhereUniqueWithoutBotInput } from "../inputs/ShardUpsertWithWhereUniqueWithoutBotInput";
import { ShardWhereUniqueInput } from "../inputs/ShardWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShardUpdateManyWithoutBotInput {
  @TypeGraphQL.Field(_type => [ShardCreateWithoutBotInput], {
    nullable: true
  })
  create?: ShardCreateWithoutBotInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardCreateOrConnectWithoutbotInput], {
    nullable: true
  })
  connectOrCreate?: ShardCreateOrConnectWithoutbotInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardUpsertWithWhereUniqueWithoutBotInput], {
    nullable: true
  })
  upsert?: ShardUpsertWithWhereUniqueWithoutBotInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ShardUpdateWithWhereUniqueWithoutBotInput], {
    nullable: true
  })
  update?: ShardUpdateWithWhereUniqueWithoutBotInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardUpdateManyWithWhereWithoutBotInput], {
    nullable: true
  })
  updateMany?: ShardUpdateManyWithWhereWithoutBotInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShardScalarWhereInput[] | undefined;
}
