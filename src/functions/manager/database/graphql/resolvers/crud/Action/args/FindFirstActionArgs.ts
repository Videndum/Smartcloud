import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ActionOrderByInput } from "../../../inputs/ActionOrderByInput";
import { ActionWhereInput } from "../../../inputs/ActionWhereInput";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";
import { ActionScalarFieldEnum } from "../../../../enums/ActionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstActionArgs {
  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  where?: ActionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActionOrderByInput], {
    nullable: true
  })
  orderBy?: ActionOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ActionWhereUniqueInput, {
    nullable: true
  })
  cursor?: ActionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ActionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "ownerId" | "registeredAt" | "version" | "usage" | "cost" | "type" | "url"> | undefined;
}
