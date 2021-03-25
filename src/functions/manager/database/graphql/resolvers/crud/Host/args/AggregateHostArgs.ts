import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { HostOrderByInput } from "../../../inputs/HostOrderByInput";
import { HostWhereInput } from "../../../inputs/HostWhereInput";
import { HostWhereUniqueInput } from "../../../inputs/HostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateHostArgs {
  @TypeGraphQL.Field(_type => HostWhereInput, {
    nullable: true
  })
  where?: HostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HostOrderByInput], {
    nullable: true
  })
  orderBy?: HostOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: true
  })
  cursor?: HostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
