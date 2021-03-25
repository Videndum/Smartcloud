import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ManagerOrderByInput } from "../../../inputs/ManagerOrderByInput";
import { ManagerWhereInput } from "../../../inputs/ManagerWhereInput";
import { ManagerWhereUniqueInput } from "../../../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateManagerArgs {
  @TypeGraphQL.Field(_type => ManagerWhereInput, {
    nullable: true
  })
  where?: ManagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ManagerOrderByInput], {
    nullable: true
  })
  orderBy?: ManagerOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: true
  })
  cursor?: ManagerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
