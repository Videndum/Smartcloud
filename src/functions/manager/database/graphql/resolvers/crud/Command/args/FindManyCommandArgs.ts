import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CommandOrderByInput } from "../../../inputs/CommandOrderByInput";
import { CommandWhereInput } from "../../../inputs/CommandWhereInput";
import { CommandWhereUniqueInput } from "../../../inputs/CommandWhereUniqueInput";
import { CommandScalarFieldEnum } from "../../../../enums/CommandScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCommandArgs {
  @TypeGraphQL.Field(_type => CommandWhereInput, {
    nullable: true
  })
  where?: CommandWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommandOrderByInput], {
    nullable: true
  })
  orderBy?: CommandOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CommandWhereUniqueInput, {
    nullable: true
  })
  cursor?: CommandWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CommandScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "ownerId" | "registeredAt" | "version" | "usage" | "cost" | "type" | "url"> | undefined;
}
