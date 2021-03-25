import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Manager: crudResolvers.ManagerCrudResolver,
  Host: crudResolvers.HostCrudResolver,
  Bot: crudResolvers.BotCrudResolver,
  Shard: crudResolvers.ShardCrudResolver,
  User: crudResolvers.UserCrudResolver,
  PAT: crudResolvers.PATCrudResolver,
  Transaction: crudResolvers.TransactionCrudResolver,
  DiscordUser: crudResolvers.DiscordUserCrudResolver,
  Guild: crudResolvers.GuildCrudResolver,
  UsersOnGuilds: crudResolvers.UsersOnGuildsCrudResolver,
  AdminOnGuilds: crudResolvers.AdminOnGuildsCrudResolver,
  Command: crudResolvers.CommandCrudResolver,
  Action: crudResolvers.ActionCrudResolver,
  TwitchUser: crudResolvers.TwitchUserCrudResolver,
  TwitchAuth: crudResolvers.TwitchAuthCrudResolver,
  TwitterUser: crudResolvers.TwitterUserCrudResolver
};
const actionResolversMap = {
  Manager: {
    manager: actionResolvers.FindUniqueManagerResolver,
    findFirstManager: actionResolvers.FindFirstManagerResolver,
    managers: actionResolvers.FindManyManagerResolver,
    createManager: actionResolvers.CreateManagerResolver,
    deleteManager: actionResolvers.DeleteManagerResolver,
    updateManager: actionResolvers.UpdateManagerResolver,
    deleteManyManager: actionResolvers.DeleteManyManagerResolver,
    updateManyManager: actionResolvers.UpdateManyManagerResolver,
    upsertManager: actionResolvers.UpsertManagerResolver,
    aggregateManager: actionResolvers.AggregateManagerResolver
  },
  Host: {
    host: actionResolvers.FindUniqueHostResolver,
    findFirstHost: actionResolvers.FindFirstHostResolver,
    hosts: actionResolvers.FindManyHostResolver,
    createHost: actionResolvers.CreateHostResolver,
    deleteHost: actionResolvers.DeleteHostResolver,
    updateHost: actionResolvers.UpdateHostResolver,
    deleteManyHost: actionResolvers.DeleteManyHostResolver,
    updateManyHost: actionResolvers.UpdateManyHostResolver,
    upsertHost: actionResolvers.UpsertHostResolver,
    aggregateHost: actionResolvers.AggregateHostResolver
  },
  Bot: {
    bot: actionResolvers.FindUniqueBotResolver,
    findFirstBot: actionResolvers.FindFirstBotResolver,
    bots: actionResolvers.FindManyBotResolver,
    createBot: actionResolvers.CreateBotResolver,
    deleteBot: actionResolvers.DeleteBotResolver,
    updateBot: actionResolvers.UpdateBotResolver,
    deleteManyBot: actionResolvers.DeleteManyBotResolver,
    updateManyBot: actionResolvers.UpdateManyBotResolver,
    upsertBot: actionResolvers.UpsertBotResolver,
    aggregateBot: actionResolvers.AggregateBotResolver
  },
  Shard: {
    shard: actionResolvers.FindUniqueShardResolver,
    findFirstShard: actionResolvers.FindFirstShardResolver,
    shards: actionResolvers.FindManyShardResolver,
    createShard: actionResolvers.CreateShardResolver,
    deleteShard: actionResolvers.DeleteShardResolver,
    updateShard: actionResolvers.UpdateShardResolver,
    deleteManyShard: actionResolvers.DeleteManyShardResolver,
    updateManyShard: actionResolvers.UpdateManyShardResolver,
    upsertShard: actionResolvers.UpsertShardResolver,
    aggregateShard: actionResolvers.AggregateShardResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver
  },
  PAT: {
    pAT: actionResolvers.FindUniquePATResolver,
    findFirstPAT: actionResolvers.FindFirstPATResolver,
    pATS: actionResolvers.FindManyPATResolver,
    createPAT: actionResolvers.CreatePATResolver,
    deletePAT: actionResolvers.DeletePATResolver,
    updatePAT: actionResolvers.UpdatePATResolver,
    deleteManyPAT: actionResolvers.DeleteManyPATResolver,
    updateManyPAT: actionResolvers.UpdateManyPATResolver,
    upsertPAT: actionResolvers.UpsertPATResolver,
    aggregatePAT: actionResolvers.AggregatePATResolver
  },
  Transaction: {
    transaction: actionResolvers.FindUniqueTransactionResolver,
    findFirstTransaction: actionResolvers.FindFirstTransactionResolver,
    transactions: actionResolvers.FindManyTransactionResolver,
    createTransaction: actionResolvers.CreateTransactionResolver,
    deleteTransaction: actionResolvers.DeleteTransactionResolver,
    updateTransaction: actionResolvers.UpdateTransactionResolver,
    deleteManyTransaction: actionResolvers.DeleteManyTransactionResolver,
    updateManyTransaction: actionResolvers.UpdateManyTransactionResolver,
    upsertTransaction: actionResolvers.UpsertTransactionResolver,
    aggregateTransaction: actionResolvers.AggregateTransactionResolver
  },
  DiscordUser: {
    discordUser: actionResolvers.FindUniqueDiscordUserResolver,
    findFirstDiscordUser: actionResolvers.FindFirstDiscordUserResolver,
    discordUsers: actionResolvers.FindManyDiscordUserResolver,
    createDiscordUser: actionResolvers.CreateDiscordUserResolver,
    deleteDiscordUser: actionResolvers.DeleteDiscordUserResolver,
    updateDiscordUser: actionResolvers.UpdateDiscordUserResolver,
    deleteManyDiscordUser: actionResolvers.DeleteManyDiscordUserResolver,
    updateManyDiscordUser: actionResolvers.UpdateManyDiscordUserResolver,
    upsertDiscordUser: actionResolvers.UpsertDiscordUserResolver,
    aggregateDiscordUser: actionResolvers.AggregateDiscordUserResolver
  },
  Guild: {
    guild: actionResolvers.FindUniqueGuildResolver,
    findFirstGuild: actionResolvers.FindFirstGuildResolver,
    guilds: actionResolvers.FindManyGuildResolver,
    createGuild: actionResolvers.CreateGuildResolver,
    deleteGuild: actionResolvers.DeleteGuildResolver,
    updateGuild: actionResolvers.UpdateGuildResolver,
    deleteManyGuild: actionResolvers.DeleteManyGuildResolver,
    updateManyGuild: actionResolvers.UpdateManyGuildResolver,
    upsertGuild: actionResolvers.UpsertGuildResolver,
    aggregateGuild: actionResolvers.AggregateGuildResolver
  },
  UsersOnGuilds: {
    findUniqueUsersOnGuilds: actionResolvers.FindUniqueUsersOnGuildsResolver,
    findFirstUsersOnGuilds: actionResolvers.FindFirstUsersOnGuildsResolver,
    findManyUsersOnGuilds: actionResolvers.FindManyUsersOnGuildsResolver,
    createUsersOnGuilds: actionResolvers.CreateUsersOnGuildsResolver,
    deleteUsersOnGuilds: actionResolvers.DeleteUsersOnGuildsResolver,
    updateUsersOnGuilds: actionResolvers.UpdateUsersOnGuildsResolver,
    deleteManyUsersOnGuilds: actionResolvers.DeleteManyUsersOnGuildsResolver,
    updateManyUsersOnGuilds: actionResolvers.UpdateManyUsersOnGuildsResolver,
    upsertUsersOnGuilds: actionResolvers.UpsertUsersOnGuildsResolver,
    aggregateUsersOnGuilds: actionResolvers.AggregateUsersOnGuildsResolver
  },
  AdminOnGuilds: {
    findUniqueAdminOnGuilds: actionResolvers.FindUniqueAdminOnGuildsResolver,
    findFirstAdminOnGuilds: actionResolvers.FindFirstAdminOnGuildsResolver,
    findManyAdminOnGuilds: actionResolvers.FindManyAdminOnGuildsResolver,
    createAdminOnGuilds: actionResolvers.CreateAdminOnGuildsResolver,
    deleteAdminOnGuilds: actionResolvers.DeleteAdminOnGuildsResolver,
    updateAdminOnGuilds: actionResolvers.UpdateAdminOnGuildsResolver,
    deleteManyAdminOnGuilds: actionResolvers.DeleteManyAdminOnGuildsResolver,
    updateManyAdminOnGuilds: actionResolvers.UpdateManyAdminOnGuildsResolver,
    upsertAdminOnGuilds: actionResolvers.UpsertAdminOnGuildsResolver,
    aggregateAdminOnGuilds: actionResolvers.AggregateAdminOnGuildsResolver
  },
  Command: {
    command: actionResolvers.FindUniqueCommandResolver,
    findFirstCommand: actionResolvers.FindFirstCommandResolver,
    commands: actionResolvers.FindManyCommandResolver,
    createCommand: actionResolvers.CreateCommandResolver,
    deleteCommand: actionResolvers.DeleteCommandResolver,
    updateCommand: actionResolvers.UpdateCommandResolver,
    deleteManyCommand: actionResolvers.DeleteManyCommandResolver,
    updateManyCommand: actionResolvers.UpdateManyCommandResolver,
    upsertCommand: actionResolvers.UpsertCommandResolver,
    aggregateCommand: actionResolvers.AggregateCommandResolver
  },
  Action: {
    action: actionResolvers.FindUniqueActionResolver,
    findFirstAction: actionResolvers.FindFirstActionResolver,
    actions: actionResolvers.FindManyActionResolver,
    createAction: actionResolvers.CreateActionResolver,
    deleteAction: actionResolvers.DeleteActionResolver,
    updateAction: actionResolvers.UpdateActionResolver,
    deleteManyAction: actionResolvers.DeleteManyActionResolver,
    updateManyAction: actionResolvers.UpdateManyActionResolver,
    upsertAction: actionResolvers.UpsertActionResolver,
    aggregateAction: actionResolvers.AggregateActionResolver
  },
  TwitchUser: {
    twitchUser: actionResolvers.FindUniqueTwitchUserResolver,
    findFirstTwitchUser: actionResolvers.FindFirstTwitchUserResolver,
    twitchUsers: actionResolvers.FindManyTwitchUserResolver,
    createTwitchUser: actionResolvers.CreateTwitchUserResolver,
    deleteTwitchUser: actionResolvers.DeleteTwitchUserResolver,
    updateTwitchUser: actionResolvers.UpdateTwitchUserResolver,
    deleteManyTwitchUser: actionResolvers.DeleteManyTwitchUserResolver,
    updateManyTwitchUser: actionResolvers.UpdateManyTwitchUserResolver,
    upsertTwitchUser: actionResolvers.UpsertTwitchUserResolver,
    aggregateTwitchUser: actionResolvers.AggregateTwitchUserResolver
  },
  TwitchAuth: {
    twitchAuth: actionResolvers.FindUniqueTwitchAuthResolver,
    findFirstTwitchAuth: actionResolvers.FindFirstTwitchAuthResolver,
    twitchAuths: actionResolvers.FindManyTwitchAuthResolver,
    createTwitchAuth: actionResolvers.CreateTwitchAuthResolver,
    deleteTwitchAuth: actionResolvers.DeleteTwitchAuthResolver,
    updateTwitchAuth: actionResolvers.UpdateTwitchAuthResolver,
    deleteManyTwitchAuth: actionResolvers.DeleteManyTwitchAuthResolver,
    updateManyTwitchAuth: actionResolvers.UpdateManyTwitchAuthResolver,
    upsertTwitchAuth: actionResolvers.UpsertTwitchAuthResolver,
    aggregateTwitchAuth: actionResolvers.AggregateTwitchAuthResolver
  },
  TwitterUser: {
    twitterUser: actionResolvers.FindUniqueTwitterUserResolver,
    findFirstTwitterUser: actionResolvers.FindFirstTwitterUserResolver,
    twitterUsers: actionResolvers.FindManyTwitterUserResolver,
    createTwitterUser: actionResolvers.CreateTwitterUserResolver,
    deleteTwitterUser: actionResolvers.DeleteTwitterUserResolver,
    updateTwitterUser: actionResolvers.UpdateTwitterUserResolver,
    deleteManyTwitterUser: actionResolvers.DeleteManyTwitterUserResolver,
    updateManyTwitterUser: actionResolvers.UpdateManyTwitterUserResolver,
    upsertTwitterUser: actionResolvers.UpsertTwitterUserResolver,
    aggregateTwitterUser: actionResolvers.AggregateTwitterUserResolver
  }
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<TModel extends ResolverModelNames> = {
  [TActionName in ModelResolverActionNames<TModel>]?: MethodDecorator[];
};

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    for (const modelResolverActionName of Object.keys(resolverActionsConfig)) {
      const decorators = resolverActionsConfig[
        modelResolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const crudTarget = crudResolversMap[modelName].prototype;
      const actionResolversConfig = actionResolversMap[modelName];
      const actionTarget = (actionResolversConfig[
        modelResolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          modelResolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, modelResolverActionName)!,
        );
        decorator(
          actionTarget,
          modelResolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, modelResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    for (const modelFieldName of Object.keys(enhanceConfig.fields)) {
      const decorators = enhanceConfig.fields[
        modelFieldName as keyof typeof enhanceConfig.fields
      ]!;

      for (const decorator of decorators) {
        decorator(typePrototype, modelFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget);
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
  }
}






