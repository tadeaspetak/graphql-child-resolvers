import { ApolloServer, gql } from "apollo-server";
import { Resolvers } from "./resolvers-types";
import { readFileSync } from "node:fs";

enum OrgMetricsSignupStatus {
  pending = "pending",
  accepted = "accepted",
  rejected = "rejected",
}

interface Org {
  id: string;
  name: string;
}

const orgs: Org[] = [
  { id: "1", name: "first org name" },
  { id: "2", name: "second org name" },
];

const metrics: {
  orgId: string;
  signups: { status: OrgMetricsSignupStatus; count: number }[];
}[] = [
  {
    orgId: "1",
    signups: [
      { status: OrgMetricsSignupStatus.pending, count: 1 },
      { status: OrgMetricsSignupStatus.rejected, count: 4 },
      { status: OrgMetricsSignupStatus.accepted, count: 0 },
    ],
  },
  {
    orgId: "2",
    signups: [
      { status: OrgMetricsSignupStatus.pending, count: 3 },
      { status: OrgMetricsSignupStatus.rejected, count: 0 },
      { status: OrgMetricsSignupStatus.accepted, count: 10 },
    ],
  },
];

const impacts: { orgId: string; impact: number }[] = [
  { orgId: "1", impact: 10 },
  { orgId: "2", impact: 40 },
];

const resolvers: Resolvers = {
  Query: {
    org: (_, args) => {
      return orgs.find((o) => o.id === args.id) ?? null;
    },
  },
  Org: {
    metrics: (parent: Org) => parent, // delegate to deeper resolvers
  },
  OrgMetrics: {
    impact: (parent: Org) =>
      impacts.find((i) => i.orgId === parent.id)?.impact ?? 0,
    signups: (parent: Org) => parent, // delegate to deeper resolvers
  },
  OrgMetricsSignups: {
    byStatus: (parent: Org, { statuses }: { statuses: string[] }) => {
      return (
        metrics
          .find((m) => m.orgId === parent.id)
          ?.signups.filter((s) => statuses.includes(s.status)) ?? []
      );
    },
  },
};

const server = new ApolloServer({
  typeDefs: readFileSync("./src/schema.graphql", "utf-8"),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
