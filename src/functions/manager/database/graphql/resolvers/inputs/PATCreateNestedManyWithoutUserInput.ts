import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATCreateOrConnectWithoutuserInput } from "../inputs/PATCreateOrConnectWithoutuserInput";
import { PATCreateWithoutUserInput } from "../inputs/PATCreateWithoutUserInput";
import { PATWhereUniqueInput } from "../inputs/PATWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PATCreateWithoutUserInput], {
    nullable: true
  })
  create?: PATCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATCreateOrConnectWithoutuserInput], {
    nullable: true
  })
  connectOrCreate?: PATCreateOrConnectWithoutuserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATWhereUniqueInput], {
    nullable: true
  })
  connect?: PATWhereUniqueInput[] | undefined;
}
