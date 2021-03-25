import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateNestedOneWithoutCommandsInput } from "../inputs/UserCreateNestedOneWithoutCommandsInput";
import { DiscordExecutionType } from "../../enums/DiscordExecutionType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommandCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  registeredAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  usage?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  cost?: number | undefined;

  @TypeGraphQL.Field(_type => DiscordExecutionType, {
    nullable: false
  })
  type!: "JSON" | "JS" | "PY";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommandsInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutCommandsInput;
}
