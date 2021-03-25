import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PATOrderByInput } from "../../../inputs/PATOrderByInput";
import { PATWhereInput } from "../../../inputs/PATWhereInput";
import { PATWhereUniqueInput } from "../../../inputs/PATWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePATArgs {
  @TypeGraphQL.Field(_type => PATWhereInput, {
    nullable: true
  })
  where?: PATWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PATOrderByInput], {
    nullable: true
  })
  orderBy?: PATOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => PATWhereUniqueInput, {
    nullable: true
  })
  cursor?: PATWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
