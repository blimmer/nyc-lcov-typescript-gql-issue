import { print } from "graphql";
import gql from "graphql-tag";

const myMutation = gql`
  mutation something(
    $var1: String!
    $var2: String!
    $var3: String!
    $var4: String!
    $var5: String!
    $var6: String!
    $var7: Boolean
  ) {
    track(
      events: [
        {
          var1: $var1
          var2: $var2
          var3: $var3
          var4: $var4
          var5: $var5
          var6: $var6
          var7: $var7
        }
      ]
    )
  }
`;

class GraphQlQueryService {
  constructor(foo: any) {
    // no-op
  }

  graphqlQuery(foo: any, bar: any) {
    print(foo);
  }
}

export async function httpTrackEvent(trackingEvent: boolean) {
  const queryService = new GraphQlQueryService(axiosClient(false));
  await queryService.graphqlQuery(myMutation, {
    var1: "foo",
    var2: "foo",
    var3: "foo",
    var4: "foo",
    var5: "foo",
    var6: "foo",
    var7: "foo"
  });
}

export function axiosClient(myBool: boolean) {
  const gatewayURL = myBool ? "example.com" : "example-foo.com";
  const token = "hello!";
  const { platform, appVersion } = { platform: "hello", appVersion: "world" };

  return baseClient(gatewayURL, {
    token,
    appVersion: `${appVersion}:${platform}:chrome`
  });
}

function baseClient(foo: string, opts: {}) {
  return undefined;
}
