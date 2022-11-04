import { OrgMetricsSignupStatus } from './src/index';
import { GraphQLResolveInfo } from 'graphql';
import { Org } from './src/index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Org = {
  __typename?: 'Org';
  id: Scalars['ID'];
  metrics: OrgMetrics;
  name: Scalars['String'];
};

export type OrgMetrics = {
  __typename?: 'OrgMetrics';
  impact: Scalars['Int'];
  signups: OrgMetricsSignups;
};

export { OrgMetricsSignupStatus };

export type OrgMetricsSignups = {
  __typename?: 'OrgMetricsSignups';
  byStatus?: Maybe<Array<OrgMetricsSignupsResult>>;
};


export type OrgMetricsSignupsByStatusArgs = {
  statuses: Array<OrgMetricsSignupStatus>;
};

export type OrgMetricsSignupsResult = {
  __typename?: 'OrgMetricsSignupsResult';
  count: Scalars['Int'];
  status: OrgMetricsSignupStatus;
};

export type Query = {
  __typename?: 'Query';
  org?: Maybe<Org>;
};


export type QueryOrgArgs = {
  id: Scalars['ID'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Org: ResolverTypeWrapper<Org>;
  OrgMetrics: ResolverTypeWrapper<Org>;
  OrgMetricsSignupStatus: OrgMetricsSignupStatus;
  OrgMetricsSignups: ResolverTypeWrapper<Org>;
  OrgMetricsSignupsResult: ResolverTypeWrapper<OrgMetricsSignupsResult>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Org: Org;
  OrgMetrics: Org;
  OrgMetricsSignups: Org;
  OrgMetricsSignupsResult: OrgMetricsSignupsResult;
  Query: {};
  String: Scalars['String'];
};

export type OrgResolvers<ContextType = any, ParentType extends ResolversParentTypes['Org'] = ResolversParentTypes['Org']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metrics?: Resolver<ResolversTypes['OrgMetrics'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrgMetricsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMetrics'] = ResolversParentTypes['OrgMetrics']> = {
  impact?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  signups?: Resolver<ResolversTypes['OrgMetricsSignups'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrgMetricsSignupStatusResolvers = EnumResolverSignature<{ accepted?: any, pending?: any, rejected?: any }, ResolversTypes['OrgMetricsSignupStatus']>;

export type OrgMetricsSignupsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMetricsSignups'] = ResolversParentTypes['OrgMetricsSignups']> = {
  byStatus?: Resolver<Maybe<Array<ResolversTypes['OrgMetricsSignupsResult']>>, ParentType, ContextType, RequireFields<OrgMetricsSignupsByStatusArgs, 'statuses'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrgMetricsSignupsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgMetricsSignupsResult'] = ResolversParentTypes['OrgMetricsSignupsResult']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrgMetricsSignupStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  org?: Resolver<Maybe<ResolversTypes['Org']>, ParentType, ContextType, RequireFields<QueryOrgArgs, 'id'>>;
};

export type Resolvers<ContextType = any> = {
  Org?: OrgResolvers<ContextType>;
  OrgMetrics?: OrgMetricsResolvers<ContextType>;
  OrgMetricsSignupStatus?: OrgMetricsSignupStatusResolvers;
  OrgMetricsSignups?: OrgMetricsSignupsResolvers<ContextType>;
  OrgMetricsSignupsResult?: OrgMetricsSignupsResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

