import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATCreateOrConnectWithoutuserInput } from "../inputs/PATCreateOrConnectWithoutuserInput";
import { PATCreateWithoutUserInput } from "../inputs/PATCreateWithoutUserInput";
import { PATScalarWhereInput } from "../inputs/PATScalarWhereInput";
import { PATUpdateManyWithWhereWithoutUserInput } from "../inputs/PATUpdateManyWithWhereWithoutUserInput";
import { PATUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PATUpdateWithWhereUniqueWithoutUserInput";
import { PATUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PATUpsertWithWhereUniqueWithoutUserInput";
import { PATWhereUniqueInput } from "../inputs/PATWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PATCreateWithoutUserInput], {
    nullable: true
  })
  create?: PATCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATCreateOrConnectWithoutuserInput], {
    nullable: true
  })
  connectOrCreate?: PATCreateOrConnectWithoutuserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: PATUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATWhereUniqueInput], {
    nullable: true
  })
  connect?: PATWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATWhereUniqueInput], {
    nullable: true
  })
  set?: PATWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PATWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATWhereUniqueInput], {
    nullable: true
  })
  delete?: PATWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: PATUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: PATUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PATScalarWhereInput[] | undefined;
}
