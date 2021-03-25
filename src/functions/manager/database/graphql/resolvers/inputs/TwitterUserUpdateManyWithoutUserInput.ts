import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitterUserCreateOrConnectWithoutuserInput } from "../inputs/TwitterUserCreateOrConnectWithoutuserInput";
import { TwitterUserCreateWithoutUserInput } from "../inputs/TwitterUserCreateWithoutUserInput";
import { TwitterUserScalarWhereInput } from "../inputs/TwitterUserScalarWhereInput";
import { TwitterUserUpdateManyWithWhereWithoutUserInput } from "../inputs/TwitterUserUpdateManyWithWhereWithoutUserInput";
import { TwitterUserUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TwitterUserUpdateWithWhereUniqueWithoutUserInput";
import { TwitterUserUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TwitterUserUpsertWithWhereUniqueWithoutUserInput";
import { TwitterUserWhereUniqueInput } from "../inputs/TwitterUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitterUserUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TwitterUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: TwitterUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserCreateOrConnectWithoutuserInput], {
    nullable: true
  })
  connectOrCreate?: TwitterUserCreateOrConnectWithoutuserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: TwitterUserUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserWhereUniqueInput], {
    nullable: true
  })
  connect?: TwitterUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserWhereUniqueInput], {
    nullable: true
  })
  set?: TwitterUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TwitterUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserWhereUniqueInput], {
    nullable: true
  })
  delete?: TwitterUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: TwitterUserUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: TwitterUserUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TwitterUserScalarWhereInput[] | undefined;
}
