import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AdminOnGuildsOrderByInput } from "../../../inputs/AdminOnGuildsOrderByInput";
import { AdminOnGuildsWhereInput } from "../../../inputs/AdminOnGuildsWhereInput";
import { AdminOnGuildsWhereUniqueInput } from "../../../inputs/AdminOnGuildsWhereUniqueInput";
import { AdminOnGuildsScalarFieldEnum } from "../../../../enums/AdminOnGuildsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAdminOnGuildsArgs {
  @TypeGraphQL.Field(_type => AdminOnGuildsWhereInput, {
    nullable: true
  })
  where?: AdminOnGuildsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsOrderByInput], {
    nullable: true
  })
  orderBy?: AdminOnGuildsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => AdminOnGuildsWhereUniqueInput, {
    nullable: true
  })
  cursor?: AdminOnGuildsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "guildId" | "createdAt"> | undefined;
}
