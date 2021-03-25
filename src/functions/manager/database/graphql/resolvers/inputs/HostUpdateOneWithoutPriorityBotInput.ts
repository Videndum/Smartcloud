import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateOrConnectWithoutpriorityBotInput } from "../inputs/HostCreateOrConnectWithoutpriorityBotInput";
import { HostCreateWithoutPriorityBotInput } from "../inputs/HostCreateWithoutPriorityBotInput";
import { HostUpdateWithoutPriorityBotInput } from "../inputs/HostUpdateWithoutPriorityBotInput";
import { HostUpsertWithoutPriorityBotInput } from "../inputs/HostUpsertWithoutPriorityBotInput";
import { HostWhereUniqueInput } from "../inputs/HostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostUpdateOneWithoutPriorityBotInput {
  @TypeGraphQL.Field(_type => HostCreateWithoutPriorityBotInput, {
    nullable: true
  })
  create?: HostCreateWithoutPriorityBotInput | undefined;

  @TypeGraphQL.Field(_type => HostCreateOrConnectWithoutpriorityBotInput, {
    nullable: true
  })
  connectOrCreate?: HostCreateOrConnectWithoutpriorityBotInput | undefined;

  @TypeGraphQL.Field(_type => HostUpsertWithoutPriorityBotInput, {
    nullable: true
  })
  upsert?: HostUpsertWithoutPriorityBotInput | undefined;

  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: true
  })
  connect?: HostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => HostUpdateWithoutPriorityBotInput, {
    nullable: true
  })
  update?: HostUpdateWithoutPriorityBotInput | undefined;
}
